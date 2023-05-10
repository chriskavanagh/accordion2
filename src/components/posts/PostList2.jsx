import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPosts = () =>
  axios.get("http://127.0.0.1:5500/data.json").then((res) => res.data);

export default function PostList2() {
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
      <h1>Post List 2</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id.toString()}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
