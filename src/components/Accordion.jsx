import { useState, useEffect } from "react";

export default function Accordion({ items, keepOthersOpen }) {
  const [accordionItems, setAccordionItems] = useState(null);

  useEffect(() => {
    if (items) {
      setAccordionItems([
        ...items.map((item) => ({
          ...item,
          toggled: false,
        })),
      ]);
    }
  }, [items]);
  return (
    <section style={styles.wrapper}>
      {/* optional chaining ?. */}
      {accordionItems?.map((item) => (
        <div style={styles.item} key={item.id.toString()}>
          <h2>{item.label}</h2>
          {item.renderContent()}
        </div>
      ))}
    </section>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "7rem",
  },
  item: {
    border: "3px solid red",
    textAlign: "center",
  },
};
