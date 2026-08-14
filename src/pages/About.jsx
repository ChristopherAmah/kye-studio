import React, { useState } from "react";
import Terminal from "../components/Terminal";
import Quiz from "../components/Quiz";

export default function About({ onSectionComplete }) {
  const [stage, setStage] = useState("terminal");

  const handleTerminalContinue = () => {
    setStage("quiz");
  };

  const handleQuizComplete = () => {
    setStage("complete");
    onSectionComplete?.();
  };

  const handleSkip = () => {
    setStage("complete");
    onSectionComplete?.();
  };

  return (
    <section className="min-h-screen theme-text py-12 px-4 max-w-3xl mx-auto flex flex-col justify-center font-mono selection:bg-emerald-500 selection:text-black">
      <div className="flex justify-between items-center mb-6 text-xs theme-muted uppercase tracking-widest border-b theme-border-strong pb-3">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          SYSTEM.v2.6 // LIGHT_AND_DARK
        </span>
        {stage !== "complete" && (
          <button
            type="button"
            onClick={handleSkip}
            className="hover:opacity-75 transition-colors underline underline-offset-4"
          >
            [ Skip Sequence ]
          </button>
        )}
      </div>

      {stage === "terminal" && (
        <div className="animate-fade-in">
          <Terminal onContinue={handleTerminalContinue} />
        </div>
      )}

      {stage === "quiz" && (
        <div className="animate-fade-in">
          <Quiz onComplete={handleQuizComplete} />
        </div>
      )}

      {stage === "complete" && (
        <div className="animate-fade-in space-y-8">
          <div className="border theme-border p-8 rounded-2xl theme-surface-strong theme-text shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight theme-text">
                Adeyemi Oyekanmi
              </h1>
              <span className="text-xs border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/30">
                ACTIVE
              </span>
            </div>

            <p className="theme-muted leading-relaxed text-base md:text-lg">
              Making things that did not exist yesterday. Solving complex
              problems through clean design, expressive code, and endless
              curiosity.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t theme-border text-xs theme-muted">
              <div>
                <span className="block theme-muted uppercase">Focus</span>
                <span className="theme-text">Artist</span>
              </div>
              <div>
                <span className="block theme-muted uppercase">Style</span>
                <span className="theme-text">Innovative / Creative</span>
              </div>
              <div>
                <span className="block theme-muted uppercase">Location</span>
                <span className="theme-text">Remote</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs theme-muted pt-2">
            <button
              type="button"
              onClick={() => setStage("terminal")}
              className="hover:opacity-75 underline underline-offset-4 transition-colors"
            >
              &larr; Restart Terminal
            </button>
            <span className="theme-muted">PORTFOLIO_LOADED</span>
          </div>
        </div>
      )}
    </section>
  );
}
