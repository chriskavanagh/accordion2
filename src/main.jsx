import React from "react";
import "./index.css";
//import App from "./App";
import Root from "./routes/root";
import About from "./components/About";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
