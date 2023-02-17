import { Box, Stack, styled } from "@mui/material";

export const BackgroundBox = styled(Box)({
  height: "100vh",
  padding: "16px 30px",
  background:
    "linear-gradient(180deg, rgba(41,176,240,1) 0%, rgba(255,255,255,1) 100%)",
});

export const ContentBox = styled(Box)({
  boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.52)",
  position: "relative",
  zIndex: "999",
  backgroundColor: "white",
  // height: '100vh',
  width: "100%",
  borderRadius: "5px",
});

export const LanguageStack = styled(Stack)(({ theme }) => ({
  position: "relative",
  flexDirection: "row",
  justifyContent: "flex-end",
  zIndex: "5",

}));

export const LoginStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
}));
