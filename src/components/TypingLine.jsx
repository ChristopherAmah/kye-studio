import { useEffect, useState } from "react";

export default function TypingLine({
  text = "",
  speed = 28,
  onComplete,
  hideCursorOnComplete = true,
}) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Reset state whenever text prop changes
    setDisplayed("");
    setIsDone(false);

    let index = 0;
    let timeoutId = null;

    const intervalId = setInterval(() => {
      index++;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(intervalId);
        setIsDone(true);

        // Safely delay onComplete call
        timeoutId = setTimeout(() => {
          onComplete?.();
        }, 250);
      }
    }, speed);

    // Cleanup both interval and timeout on unmount or re-render
    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed]); // Added speed to dependencies

  return (
    <p className="leading-8 whitespace-pre-wrap">
      {displayed}
      {(!isDone || !hideCursorOnComplete) && (
        <span className="inline-block animate-pulse ml-0.5">█</span>
      )}
    </p>
  );
}