import { useState } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

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
    setType(type);
    const name = e.target.name;
    setName(name);

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <h1>Hello World 😺</h1>
      <h2 style={{ color: "red", fontFamily: "fantasy" }}>Type is {type}</h2>
      <h2 style={{ color: "pink" }}>Name is {name}</h2>
      <CheckBox data={data} setData={setData} handleChange={handleChange} />
    </div>
  );
}

export default App;
