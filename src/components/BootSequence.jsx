import { useEffect, useState } from "react";

const introText = [
  "UNMADE STARTED WITH BOREDOM.",
  "Creating before you know what you’re creating.",
  "Finding joy in the mess.",
  "Being curious.",
  "Making things because making things is fun.",
  "Who said it had to be perfect?",
  "Every piece here came from that place. Not from trying to make important art, but from genuinely enjoying the process of painting.",
  "That’s what UNMADE is about."
];

const bootMessages = [
  "UNMADE OS v1.0",
  "",
  "> Initializing...",
  "> Loading memories...",
  "> Checking creative integrity...",
  "> Loading identity...",
];

export default function BootSequence({ onComplete }) {
  const [phase, setPhase] = useState("intro"); // "intro" | "boot"
  const [visibleIntroLines, setVisibleIntroLines] = useState([]);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [finishedMessages, setFinishedMessages] = useState(false);

  // Phase 1: Animate Manifesto Lines
  useEffect(() => {
    if (phase !== "intro") return;

    let lineIndex = 0;
    const introTimer = setInterval(() => {
      if (lineIndex < introText.length) {
        setVisibleIntroLines((prev) => [...prev, introText[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(introTimer);
      }
    }, 350); // Speed of line reveal

    return () => clearInterval(introTimer);
  }, [phase]);

  // Phase 2: Boot Messages
  useEffect(() => {
    if (phase !== "boot") return;

    let messageIndex = 0;
    const messageTimer = setInterval(() => {
      if (messageIndex < bootMessages.length) {
        setVisibleMessages((prev) => [...prev, bootMessages[messageIndex]]);
        messageIndex++;
      } else {
        clearInterval(messageTimer);
        setFinishedMessages(true);
      }
    }, 450);

    return () => clearInterval(messageTimer);
  }, [phase]);

  // Phase 3: Progress Bar
  useEffect(() => {
    if (!finishedMessages) return;

    let value = 0;
    const progressTimer = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;

      if (value >= 100) {
        value = 100;
        clearInterval(progressTimer);

        setTimeout(() => {
          onComplete?.();
        }, 600);
      }

      setProgress(value);
    }, 90);

    return () => clearInterval(progressTimer);
  }, [finishedMessages, onComplete]);

  return (
    <div className="font-mono text-sm md:text-base theme-text space-y-4 max-w-2xl">
      {/* Intro Section */}
      <div className="space-y-2">
        {visibleIntroLines.map((line, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "font-bold tracking-wider text-base md:text-lg uppercase"
                : "opacity-90 leading-relaxed"
            }
          >
            {line}
          </p>
        ))}
      </div>

      {/* Trigger Button to start loading */}
      {phase === "intro" && (
        <div className="pt-4">
          {visibleIntroLines.length === introText.length ? (
            <button
              onClick={() => setPhase("boot")}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest border theme-border theme-surface hover:opacity-80 transition-all cursor-pointer animate-pulse"
            >
              [ Press / Click to Initialize OS ]
            </button>
          ) : (
            <button
              onClick={() => {
                setVisibleIntroLines(introText);
                setPhase("boot");
              }}
              className="text-xs opacity-50 hover:opacity-100 underline transition"
            >
              Skip Intro
            </button>
          )}
        </div>
      )}

      {/* Boot Messages & Loading Bar */}
      {phase === "boot" && (
        <div className="pt-6 border-t theme-border space-y-2 transition-opacity duration-500">
          {visibleMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}

          {finishedMessages && (
            <div className="pt-2">
              <div className="h-2 w-full bg-[color:var(--color-border)] rounded overflow-hidden">
                <div
                  className="h-full theme-button transition-all duration-75"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
              <p className="mt-1 text-xs">{progress}%</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}