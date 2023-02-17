import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useUpdatePost } from "../hooks/usePost";

export const PostEdit = ({
  isOpen,
  toggleClose,
  post,
}: {
  isOpen: boolean;
  toggleClose: any;
  post: any;
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { postTitle: post.postTitle, postText: post.postText },
  });
  const updatePost = useUpdatePost()

  const onSubmit = async (data: any) => {
    const newPost = {...data, id: post.id};
    await updatePost.mutate(newPost)
    toggleClose();
    reset({...data});
  };

  return (
    <Dialog open={isOpen} aria-labelledby="form-modal-post">
      <Box
        sx={{
          width: "600px",
          height: "600px",
          display: "grid",
          gridTemplateRows: "100px 470px 30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: "30px",
          }}
        >
          <Typography
            sx={{ fontFamily: "noto-sans-armenian", fontWeight: "900" }}
            variant="h4"
          >
            Update your post, {post.firstName}
          </Typography>
          <Button onClick={toggleClose}>X</Button>
        </Box>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            fontFamily: "noto-sans-armenian",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <FormControl>
            <h5 style={{ margin: 0, marginLeft: "2px", marginBottom: "2px" }}>
              Post Title
            </h5>
            <TextField
              placeholder="Choose your title..."
              sx={{ width: "450px" }}
              variant="outlined"
              {...register("postTitle")}
            />
          </FormControl>
          <FormControl>
            <h5 style={{ margin: 0, marginLeft: "2px", marginBottom: "0px" }}>
              Post Text
            </h5>

            <TextField
              multiline
              rows={5}
              sx={{ width: "450px" }}
              placeholder="Type here your post..."
              {...register("postText")}
            />
          </FormControl>{" "}
          <Button
            type="submit"
            sx={{
              bgcolor: "blue",
              width: "70%",
              color: "white",
              "&:hover": { backgroundColor: "green" },
            }}
          >
            Update
          </Button>
        </form>
      </Box>
    </Dialog>
  );
};
