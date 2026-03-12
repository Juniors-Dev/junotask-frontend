import { ReactNode, useState } from "react";
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PanelProvider } from "@/context/PanelContext";
import SlidePanel from "@/components/Ui/SlidePanel";

const Layout = ({
  children,
  dehydratedState,
}: {
  children: ReactNode;
  dehydratedState: DehydratedState;
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <PanelProvider>
          {children}
          <SlidePanel />
        </PanelProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default Layout;
