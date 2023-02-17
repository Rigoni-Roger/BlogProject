import * as React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { BackgroundBox, ContentBox } from "./style/styled";
import { Loading } from "./components/Loading";
import { Posts } from "./components/Posts";
import { queryClient } from "./react-query/queryClient";

import { DarkMode } from "./components/DarkMode";
import { Header } from "./components/Header";
import { CreatePostButton } from "./components/CreatePostButton";

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundBox>
        <DarkMode />
        <ContentBox >
          <Loading />
          <Header />
          <CreatePostButton />
          <Posts />
        </ContentBox>
      </BackgroundBox>
    </QueryClientProvider>
  );
}


export default App;
