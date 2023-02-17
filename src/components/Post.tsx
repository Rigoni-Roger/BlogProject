import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDeletePost } from "../hooks/usePost";
import { useToggle } from "../hooks/useToggle";
import { PostEdit } from "./PostEdit";

export const Post = ({ data }: any) => {
  const { firstName, lastName, postTitle, postText, id } = data;
  const { isOpen, toggleClose, toggleOpen } = useToggle();
  const removePost = useDeletePost();

  return (
    <>
      <Card
        sx={{ height: 375, maxWidth: 375, minWidth: 275 }}
        variant="outlined"
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {`by ${firstName} ${lastName}`}
          </Typography>
          <Typography variant="h5" component="div">
            {postTitle.toLowerCase()}
          </Typography>
          <Box sx={{ height: 217, marginTop: 2 }}>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              {postText}
            </Typography>
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button onClick={toggleOpen} size="small" variant="contained">
            Edit Post
          </Button>
          <IconButton
            onClick={() => removePost.mutate(id)}
            color="primary"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <PostEdit isOpen={isOpen} toggleClose={toggleClose} post={data} />
    </>
  );
};
