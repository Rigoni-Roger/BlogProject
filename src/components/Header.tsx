import React from "react";
import { LoginStack } from "../style/styled";
import { Box, TextField, IconButton } from "@mui/material";
import {Login} from '@mui/icons-material'
import logo from "../images/Blogger-Logo.png";

export const Header = () => {
  return (
    <LoginStack>
      <Box
        display={{xs: "none", sm: 'flex'}}
        justifyContent="center"
        flex={0.35}
        sx={{ height: "120px" }}
      >
        <img src={logo} alt="logo" />
      </Box>
      <Box
// ml={1}
mr={3}
        display="flex"
        alignItems="center"
        justifyContent={{xs: "space-around", sm:'flex-end'}}
        flex={1}
        component="form"
        gap={{xs: 1, md: 2}}
        onSubmit={(e) => {e.preventDefault(); console.log('work!')}}
      >
        <TextField inputProps={{sx: {fontSize: {xs: '12px', md: '16px'}, padding: '8.5px'}}}
  size="small" label="Email" />
        <TextField
inputProps={{sx: {fontSize: {xs: '12px', md: '16px'}}}}
          size="small"
          type="password"
          autoComplete="current-password"
          label="Password"
        />
      <IconButton type="submit" aria-label="login-button" sx={{color: "white", backgroundColor: '#FF5617'}}>
        <Login />
      </IconButton>
      </Box>
    </LoginStack>
  );
};
