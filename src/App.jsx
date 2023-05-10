import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostList2 from "./components/posts/PostList2";
import PostList1 from "./components/posts/PostList1";

//import { Routes, Route, Outlet, Link } from "react-router-dom";
//import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

//const queryClient = new QueryClient();
function Test() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Test Component</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque esse,
        quia minima ratione illum hic, odit veritatis natus earum illo ut
        possimus atque officiis quidem pariatur qui nulla culpa voluptatibus!
      </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  return (
    <div className="App">
      {/* <h1>Hello World 😺</h1> */}
      <div className="btnGroup">
        <button
          className="Appbtn1"
          onClick={() => setCurrentPage(<PostList1 />)}
        >
          Post List 1
        </button>
        <button className="Appbtn2" onClick={() => setCurrentPage(<Test />)}>
          Test Component
        </button>
        <button
          className="Appbtn3"
          onClick={() => setCurrentPage(<PostList2 />)}
        >
          Post List 2
        </button>
      </div>
      <br />
      {currentPage}
    </div>
  );
}

export default App;
