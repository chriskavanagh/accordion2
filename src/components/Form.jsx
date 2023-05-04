import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    JSON.stringify(data);
  }

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
    <div>
      <h1>Form</h1>
      <form action=""></form>
    </div>
  );
}
