import React from "react";

import { FormControl, TextField } from "@mui/material";

export const Inputs = ({register}:{register: any}) => {
  return (
    <>
{/* FIRST NAME INPUT*/}
      <FormControl>
        <h5 style={{ margin: 0, marginLeft: "2px", marginBottom: "2px" }}>
          First Name
        </h5>
        <TextField
          sx={{ width: "220px" }}
          placeholder="Tell us your name"
          variant="outlined"
          {...register("firstName")}
        />
      </FormControl>

{/* lAST NAME INPUT*/}
      <FormControl>
        <h5 style={{ margin: 0, marginLeft: "2px", marginBottom: "2px" }}>
          Last Name
        </h5>
        <TextField
          sx={{ width: "220px" }}
          placeholder="Tell us your last name"
          variant="outlined"
          {...register("lastName")}
        />
      </FormControl>

{/* POST TITLE INPUT*/}
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

{/* POST TEXT INPUT*/}
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
      </FormControl>
    </>
  );
};
