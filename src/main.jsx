import "./index.css";
import React from "react";
//import App from "./App";
import Root from "./routes/root";
import About from "./components/About";
import ReactDOM from "react-dom/client";
import Contact from "./components/Contact";
import Queries from "./components/Queries";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import Contacts, { loader as contactLoader } from "./components/Contacts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

//const queryClient = new QueryClient();

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
); */

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
        loader: contactLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/query",
        element: <Queries />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
