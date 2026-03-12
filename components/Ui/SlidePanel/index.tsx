import { usePanel } from "@/context/PanelContext";
import { useEffect } from "react";

export default function SlidePanel() {
  const { panel, closePanel } = usePanel();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    if (panel.open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [panel.open, closePanel]);

  return (
    <>
      <div
        className={`slide-backdrop ${panel.open ? "" : "slide-backdrop-hidden"}`}
        onClick={closePanel}
      />
      <div className={`slide-panel ${panel.open ? "" : "slide-panel-hidden"}`}>
        <div className="slide-panel-header">
          <h2 className="slide-panel-title">{panel.title}</h2>
          <button
            type="button"
            onClick={closePanel}
            className="slide-panel-close"
          >
            ✕
          </button>
        </div>
        <div className="slide-panel-body">
          {panel.content}
        </div>
      </div>
    </>
  );
}
