import { useState } from "react";
import Accordion from "./Accordion";

export default function HomePage() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState({ sameAsBilling: false, optInNews: false });

  // data
  const articles = [
    {
      id: 1,
      label: <h3>Cool Label</h3>,
      renderContent: () => (
        <p style={styles.item1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      ),
    },
    {
      id: 2,
      label: "Twitter Label",
      renderContent: () => (
        <ul style={{ padding: "2rem" }}>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
          <li>List Item 4</li>
        </ul>
      ),
    },
    {
      id: 3,
      label: "Button Label",
      renderContent: () => <button>Hello I'm a Button</button>,
    },
  ];
  return (
    <>
      <h1
        style={{
          margin: "6rem auto 3rem auto",
          textAlign: "center",
          fontSize: "60px",
        }}
      >
        Welcome!
      </h1>

      <Accordion items={articles} keepOthersOpen={true} />
    </>
  );
}

const styles = {
  item1: {
    maxWidth: "350px",
  },
};
