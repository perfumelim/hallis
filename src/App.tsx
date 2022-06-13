import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginPage from "pages/LoginPage";
import { GlobalStyles } from "styles/GlobalStyles";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <LoginPage />
    </QueryClientProvider>
  );
}
