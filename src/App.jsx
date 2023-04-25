import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World 😺</h1>
      <Link to="/about">About Page</Link>
      <h2 style={{ color: "red", fontFamily: "fantasy" }}>Type is {type}</h2>
      <h2 style={{ color: "pink" }}>Name is {name}</h2>
    </div>
  );
}

export default App;
