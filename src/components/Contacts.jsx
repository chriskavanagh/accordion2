import React from "react";
import axios from "axios";
import "./contacts.css";
import { useLoaderData } from "react-router-dom";

/* function getContacts() {
  axios.get("../people.json").then((res) => res.data);
} */

export function loader() {
  return axios.get("./people.json").then((res) => res.data);
}

/* export async function loader() {
  return getContacts();
} */

export default function Contacts() {
  const contacts = useLoaderData();
  console.log("My Contacts " + contacts);
  return (
    <div className="wrapper">
      {contacts.map((c) => (
        <div key={c.id.toString()}>
          <h2>{c.name}</h2>
          <p>{c.label}</p>
        </div>
      ))}
    </div>
  );
}
