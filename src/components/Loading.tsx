import React from "react";
import { useIsFetching } from "@tanstack/react-query";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/material";

export const Loading = () => {
  const isFetching = useIsFetching();

  return (

    <ClipLoader
      loading={!!isFetching}
      color='#30B2F0'
      size={50}
      speedMultiplier={.7}
      cssOverride={{
        display: "inherit",
        position: "absolute",
        zIndex: "99999",                
        left: "calc(50% - 25px)",
        top: "calc(50% - 25px)",
        borderWidth: '5px'
      }}
    />
 
  );
};
