import React from "react";

import { Box, Tooltip, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

import { PostForm } from "./PostForm";
import { useCreatePost } from "../hooks/usePost";
import { useToggle } from "../hooks/useToggle";

export const CreatePostButton = () => {
    const { isOpen, toggleClose, toggleOpen } = useToggle();
    const addPost = useCreatePost();



  return (
    <Box
      marginLeft={{ xs: 0, sm: 5 }}
      height='60px'
      display={{ xs: "flex", sm: "block" }}
      justifyContent="center"
    >
      <Tooltip title="Delete">
        <Button onClick={toggleOpen} startIcon={<Add />}>
          Create a new Post
        </Button>
      </Tooltip>
      <PostForm toggleClose={toggleClose} isOpen={isOpen} addPost={addPost} />
    </Box>
  );
};
