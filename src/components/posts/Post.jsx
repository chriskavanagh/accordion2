import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function getPost() {
  axios
    .get(`http://127.0.0.1:5500/data`, { params: { id: 2 } })
    .then((res) => res.data);
}

export default function Post({ id }) {
  const { data, isError, isLoading, status } = useQuery({
    queryKey: ["posts", id],
    queryFn: (id) => getPost(id),
  });

  {
    isLoading && <h1>Loading Data. . .</h1>;
  }
  {
    isError && <h1>Error! </h1>;
  }
  return (
    <div>
      <h1>{data?.title}</h1>
      <br />
      <small>data.userId</small>
      <p>{data?.body}</p>
      <button onClick={getPost}>Get Post</button>
    </div>
  );
}
