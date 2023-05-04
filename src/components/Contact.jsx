import { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {
  const [people, setPeople] = useState([]);

  /* useEffect(() => {
    fetch("../users.json")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []); */

  function getPeople() {
    axios.get("../../users.json").then((res) => setPeople(res.data));
  }

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div style={styles.wrapper}>
      <h1>Contact</h1>
      {people.length <= 0 && <h1>Loading. . .</h1>}
      {people?.map((user) => (
        <div key={user.id.toString()}>
          <h1 style={styles.dataName}>{user.name}</h1>
          <h3 style={styles.dataLabel}>{user.label}</h3>
        </div>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "1rem",
  },
  dataLabel: {
    color: "green",
    marginBottom: "5rem",
  },
  dataName: {
    marginTop: "2rem",
    marginBottom: "1rem",
  },
};
