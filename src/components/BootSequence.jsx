import { useEffect, useState } from "react";

const bootMessages = [
  "UNMADE OS v1.0",
  "",
  "> Initializing...",
  "> Loading memories...",
  "> Checking creative integrity...",
  "> Loading identity...",
];

export default function BootSequence({ onComplete }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [finishedMessages, setFinishedMessages] = useState(false);

  useEffect(() => {
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
  }, []);

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
    <div className="font-mono text-sm md:text-base theme-text space-y-2">
      {visibleMessages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}

      {finishedMessages && (
        <>
          <div className="mt-4 h-2 w-full bg-[color:var(--color-border)] rounded overflow-hidden">
            <div
              className="h-full theme-button transition-all duration-75"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p>{progress}%</p>
        </>
      )}
    </div>
  );
}
