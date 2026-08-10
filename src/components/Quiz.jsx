import React, { useState, useEffect, useRef } from "react";

const quizData = [
  {
    tag: "Question 01",
    question: "What is the primary objective of building?",
    options: [
      { text: "Perfection", feedback: "Too rigid. Progress > Perfection.", correct: false },
      { text: "Solving problems", feedback: "Correct.", correct: true },
      { text: "Shipping fast", feedback: "Close, but speed without purpose is noise.", correct: false }
    ]
  },
  {
    tag: "Question 02",
    question: "When is a design actually finished?",
    options: [
      { text: "When there's nothing left to add.", feedback: "Incorrect. Simplicity comes from removal.", correct: false },
      { text: "When the deadline hits.", feedback: "Practical, but no.", correct: false },
      { text: "When there's nothing left to take away.", feedback: "Correct.", correct: true }
    ]
  },
  {
    tag: "Final Question",
    question: "Why make art?",
    options: [
      { text: "Money", feedback: "Incorrect.", correct: false },
      { text: "Attention", feedback: "Close.", correct: false },
      { text: "Because I had to.", feedback: "Correct.", correct: true }
    ]
  }
];

const finalAnswer =
  "Okay, the truth? I just really like solving problems. That's the real thread connecting all the messy experiments.";

export default function Quiz({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [revealed, setRevealed] = useState(false);

  const timerRef = useRef(null);
  const currentQuiz = quizData[currentStep];

  // Clean up timeout on unmount to prevent state memory leaks
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSelect = (optionObj) => {
    // Lock interaction once completed
    if (revealed) return;

    setSelected(optionObj.text);

    if (optionObj.correct) {
      setFeedback("");

      if (timerRef.current) clearTimeout(timerRef.current);

      if (currentStep < quizData.length - 1) {
        // Short delay before advancing to the next question
        timerRef.current = setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
          setSelected(null);
          setFeedback("");
        }, 800);
      } else {
        // Reached the end of the quiz
        setRevealed(true);

        // Notify parent after delay
        timerRef.current = setTimeout(() => {
          onComplete?.();
        }, 2500);
      }
    } else {
      setFeedback(optionObj.feedback);
    }
  };

  return (
    <div className="space-y-8 font-mono">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] theme-muted">
          {currentQuiz.tag}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 theme-text">
          {currentQuiz.question}
        </h2>
      </div>

      <div className="border theme-border rounded-2xl theme-surface p-6 shadow-inner">
        <div className="space-y-3">
          {currentQuiz.options.map((optionObj) => (
            <button
              key={optionObj.text}
              type="button"
              disabled={revealed}
              onClick={() => handleSelect(optionObj)}
              className={`w-full text-left rounded-xl border p-4 transition-all duration-300 disabled:opacity-80 ${
                selected === optionObj.text
                  ? "border-[var(--color-button)] bg-[var(--color-button)] text-[var(--color-button-text)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-strong)] theme-text"
              }`}
            >
              {optionObj.text}
            </button>
          ))}
        </div>
      </div>

      {/* Wrong Answer Feedback */}
      {selected && feedback && !revealed && (
        <div className="animate-fade-in border border-red-200 bg-red-50 rounded-xl p-5">
          <p className="text-red-600 font-semibold">{feedback}</p>
        </div>
      )}

      {/* Correct Answer Revelation (triggers on final question) */}
      {revealed && (
        <div className="animate-fade-in space-y-6">
          <div className="border border-green-200 bg-green-50 rounded-xl p-5">
            <p className="text-green-700 font-semibold">Correct.</p>
          </div>

          <div className="border theme-border rounded-2xl theme-surface p-8 shadow-inner">
            <p className="leading-8 theme-text text-lg">{finalAnswer}</p>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] theme-muted animate-pulse">
            Clearing terminal...
          </p>
        </div>
      )}
    </div>
  );
}
