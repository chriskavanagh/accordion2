import { useState } from "react";

import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  const [data, setData] = useState({
    billFirstName: "",
    billLastName: "",
    billAddress1: "",
    billAddress2: "",
    billCity: "",
    billState: "",
    billZipCode: "",
    sameAsBilling: false,
    shipFirstName: "",
    shipLastName: "",
    shipAddress1: "",
    shipAddress2: "",
    shipCity: "",
    shipState: "",
    shipZipCode: "",
    optInNews: false,
  });

  function handleChange(e) {
    const type = e.target.type;
    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <h1>Hello World 😺</h1>
      <CheckBox data={data} setData={setData} handleChange={handleChange} />
    </div>
  );
}

export default App;
