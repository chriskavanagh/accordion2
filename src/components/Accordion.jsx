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
    <div style={styles.wrapper}>
      {/* optional chaining ?. */}
      {accordionItems?.map((item, key) => (
        <div>
          <h2 key={item.id.toString()}>{item.label}</h2>
          <p>{item.renderContent()}</p>
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
};
