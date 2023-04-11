import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Billing Info",
    1: "Shipping Info",
    2: "Opt-In",
  };

  const [page, setPage] = useState(0);
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
    console.log(e.target.type);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const {
    billAddress2,
    sameAsBilling,
    shipAddress2,
    optInNews,
    ...requiredInputs
  } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  return (
    <FormContext.Provider value={{ title, page, setPage, data, setData }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContext;
