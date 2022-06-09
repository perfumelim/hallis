import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "components/Login";
import GlobalStyles from "styles/GlobalStyles";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Login />
    </QueryClientProvider>
  );
}
