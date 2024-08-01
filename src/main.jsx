import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layout/main-layout/mainLayout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainLayout>
      <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      
    </MainLayout>
  </React.StrictMode>
);
