import { Box, Switch, Typography } from "@mui/material";
import React from "react";
import { LanguageStack } from "../style/styled";

export const DarkMode = () => {
  return (
    <LanguageStack>
      <Box
        sx={{
          backgroundColor: "rgba(53,139,180, 1)",
          marginRight: "10px",
  color: 'white',
paddingLeft: '12px',
paddingRight: '6px',
          flexWrap: 'nowrap',
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          borderTopLeftRadius: "5px 5px",
          borderTopRightRadius: "5px 5px",
        }}
      >
        <Typography variant='body1'>DARK MODE:</Typography>
        <Switch size="small" />
      </Box>
    </LanguageStack>
  );
};
