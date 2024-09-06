import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import "rsuite/dist/rsuite-no-reset.min.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
