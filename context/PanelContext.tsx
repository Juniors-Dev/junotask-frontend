import { useContext, useState, ReactNode, createContext } from "react";

type PanelState = {
  open: boolean;
  title: string;
  content: ReactNode;
};

const PanelContext = createContext<{
  panel: PanelState;
  openPanel: (opts: { title: string; content: ReactNode }) => void;
  closePanel: () => void;
} | null>(null);

export function PanelProvider({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<PanelState>({
    open: false,
    title: "",
    content: null,
  });

  const openPanel = ({
    title,
    content,
  }: {
    title: string;
    content: ReactNode;
  }) => {
    setPanel({ open: true, title, content });
  };

  const closePanel = () => {
    setPanel({ open: false, title: "", content: null });
  };

  return (
    <PanelContext.Provider value={{ panel, openPanel, closePanel }}>
      {children}
    </PanelContext.Provider>
  );
}
export function usePanel() {
  const ctx = useContext(PanelContext);
  if (!ctx) throw new Error("usePanel must be used within PanelProvider");
  return ctx;
}
