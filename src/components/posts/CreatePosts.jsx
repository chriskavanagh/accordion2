import { useMutation } from "@tanstack/react-query";
import React, { useRef } from "react";

export default function CreatePosts() {
  const titleRef = useRef();
  const bodyRef = useRef();
  createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {},
  });

  createPostMutation.mutate();

  function handleSubmit(e) {
    e.preventDefault();
    createPostMutation.mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });
  }
  return <div></div>;
}
