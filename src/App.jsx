import Queries from "./components/Queries";
import Contact from "./components/Contact";
//import { Routes, Route, Outlet, Link } from "react-router-dom";
//import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";

//const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <h1>Hello World 😺</h1>
      <Queries />
      <Contact />
    </div>
  );
}

export default App;
