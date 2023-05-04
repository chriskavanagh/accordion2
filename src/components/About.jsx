import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function About() {
  const [text, setText] = useState("");

  const buttonFunc = (e) => {
    setText("You're Subscribed To The Newsletter!");
  };

  // react-query
  /* const {
    data: contacts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["repo"],
    queryFn: fetchUsers,
  }); */

  return (
    <section style={styles.wrapper}>
      <header style={styles.header}>
        <h1>About Section</h1>
      </header>
      <div>
        <button className="btn2" onClick={buttonFunc}>
          Signup For Our Newsletter!
        </button>
        <p>{text}</p>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "29px",
    quotes: "initial",
  },
  header: {
    marginTop: "4rem",
    marginBottom: "3rem",
  },
};
