import React from "react";
import { Box } from "@mui/material";
import { Post } from "./Post";
import { usePosts } from "../hooks/usePost";

export const Posts = () => {
  const posts = usePosts();
  const {data} = posts

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      p={5}
      justifyContent="flex-start"
    >

      {data && data.map((item: any) => <Post key={item.id} data={item} />)}
    </Box>
  );
};
