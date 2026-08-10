export default function ContinuePrompt({ onContinue }) {
  const handleNoClick = () => {
    alert("Too bad.\n\nContinuing anyway.");
    onContinue();
  };

  return (
    <div className="space-y-6 font-mono">
      <p className="text-lg font-semibold">Continue?</p>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onContinue}
          className="border border-current px-5 py-2 transition-colors hover:bg-[var(--color-button)] hover:text-[var(--color-button-text)]"
        >
          YES
        </button>

        <button
          type="button"
          onClick={handleNoClick}
          className="border border-current px-5 py-2 transition-colors hover:bg-[var(--color-button)] hover:text-[var(--color-button-text)]"
        >
          NO
        </button>
      </div>
    </div>
  );
}
