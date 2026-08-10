import { useEffect, useMemo, useState, useCallback } from "react";
import BootSequence from "./BootSequence";
import TypingLine from "./TypingLine";
import ContinuePrompt from "./ContinuePrompt";
import { terminalQuestions, answerVariants } from "../data/terminalData";

export default function Terminal({ onContinue }) {
  const [booted, setBooted] = useState(false);
  const [index, setIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);

  // Randomize answer variants once on mount/data change
  const questions = useMemo(() => {
    return terminalQuestions.map((q) => {
      if (!q.key) return q;
      const variants = answerVariants[q.key] || [];
      return {
        ...q,
        answer: variants[Math.floor(Math.random() * variants.length)] || "",
      };
    });
  }, []);

  const totalSteps = questions.length * 2;

  // Use functional state updates to prevent stale closure bugs
  const advance = useCallback((expectedIndex) => {
    setIndex((currentIndex) => {
      // Only step forward if we are at the exact step expected
      if (currentIndex === expectedIndex) {
        const nextIndex = currentIndex + 1;
        if (nextIndex >= totalSteps) {
          setShowPrompt(true);
        }
        return nextIndex;
      }
      return currentIndex;
    });
  }, [totalSteps]);

  return (
    <div className="theme-surface rounded-2xl border theme-border p-6 font-mono shadow-inner">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {booted && (
        <div className="space-y-3">
          {questions.map((q, i) => {
            const questionStep = i * 2;
            const answerStep = i * 2 + 1;

            return (
              <div key={q.key || i} className="space-y-1">
                {/* Question Line */}
                {index >= questionStep && (
                  <TypingLine
                    text={`> ${q.question}`}
                    onComplete={() => advance(questionStep)}
                  />
                )}

                {/* Answer Line */}
                {index >= answerStep && (
                  <TypingLine
                    text={q.answer}
                    speed={22}
                    onComplete={() => advance(answerStep)}
                  />
                )}
              </div>
            );
          })}

          {showPrompt && (
            <div className="pt-6 animate-fade-in">
              <ContinuePrompt onContinue={onContinue} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
