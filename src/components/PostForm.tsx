import React from "react";
import { useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import { Box, Button, Typography } from "@mui/material";
import { Inputs } from "./Inputs";

export const PostForm = ({
  isOpen,
  addPost,
  toggleClose,
}: {
  isOpen: boolean;
  addPost: any;
  toggleClose: any;
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { firstName: "", lastName: "", postTitle: "", postText: "" },
  });

  const onSubmit = async (data: any) => {
    addPost.mutate(data);    
      toggleClose();
      reset();
    
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
            Post your experience!
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
          <Inputs register={register} />
          <Button
            type="submit"
            sx={{
              bgcolor: "blue",
              width: "70%",
              color: "white",
              "&:hover": { backgroundColor: "green" },
            }}
          >
            {addPost.isLoading ? "Posting..." : "Post"}
          </Button>
        </form>
      </Box>
    </Dialog>
  );
};
