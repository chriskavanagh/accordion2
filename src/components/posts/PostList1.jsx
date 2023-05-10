import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostList.css";

const getPosts = () =>
  axios.get("http://127.0.0.1:5500/data.json/?id=3").then((res) => res.data);

export default function PostList1() {
  const navigate = useNavigate();
  const { data, isLoading, isError, fetchStatus, status } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  console.log(fetchStatus);
  console.log(status);

  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <h1>Error</h1>;
  return (
    <div>
      <h1>Post List 1</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      <ul>
        {data?.map((post) => (
          <li key={post.id.toString()}>
            {post.id}-{post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
