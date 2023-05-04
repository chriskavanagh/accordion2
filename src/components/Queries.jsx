//import axios from "axios";
import { getRequest } from "../client/api";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const fetchUsers = () => getRequest("./contacts.json").then((res) => res.data);

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

export default function Queries() {
  //const queryClient = useQueryClient();

  const {
    data: contacts,
    isLoading,
    isError,
    status,
  } = useQuery({
    queryKey: ["repo"],
    queryFn: fetchUsers,
  });

  if (isLoading === true) {
    return <h2>Loading. . .</h2>;
  }
  if (isError == true) {
    return <h2>You Have An Error</h2>;
  }
  console.log(status);

  /* if (data.length) {
    return <h1>Data is Here!!</h1>;
  } */

  /* const postMutation = useMutation({
    mutationFn: async (title) => {
      return await POSTS.push({ id: 3, title });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  }); */

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.pageTitle}>React Query Test</h1>
      {contacts?.map((d) => (
        <div key={d.id.toString()}>
          <h2>{d.name}</h2>
          <p style={styles.label}>{d.label}</p>
        </div>
      ))}

      {/* <h2 style={styles.mutationTitle}>Mutation Ex</h2>
      <button
        style={styles.btn}
        disabled={postMutation.isLoading}
        onClick={() => postMutation.mutate("Post 3")}
      >
        Add New Post
      </button>
      {POSTS.map((p) => (
        <h3>{p.title}</h3>
      ))} */}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2.5rem",
  },
  pageTitle: {
    marginBottom: "5rem",
    fontSize: "4rem",
    fontWeight: "bold",
    borderBottom: "7px black solid",
  },
  label: {
    marginBottom: "3rem",
    color: "orange",
  },
  mutationTitle: {
    marginTop: "3rem",
    marginBottom: "1.5rem",
    borderBottom: "3px solid black",
  },
  btn: {
    marginBottom: ".6rem",
    padding: "7px 10px",
    backgroundColor: "#fff",
    color: "#233e5c",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};
