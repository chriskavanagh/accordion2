import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function About() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section style={styles.wrapper}>
      <header style={styles.header}>
        <h1>About Section</h1>
      </header>
      <div>
        <button className="btn2" onClick={() => console.log("HELLO")}>
          Newsletter!
        </button>
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
