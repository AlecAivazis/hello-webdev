import ReactDom from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RepoSummary } from "./app";

// Create a client for react-query
const queryClient = new QueryClient();

ReactDom.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RepoSummary />
  </QueryClientProvider>
);
