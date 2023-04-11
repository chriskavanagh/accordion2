import React, { useState } from "react";

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(data));
  }

  return <div>Form</div>;
}

export default Form;
