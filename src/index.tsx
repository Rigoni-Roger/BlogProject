import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query/queryClient";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import "./index.css";
import App from "./App";
import '@fontsource/public-sans';

import "@fontsource/noto-sans-armenian/100.css";
import "@fontsource/noto-sans-armenian/300.css";
import "@fontsource/noto-sans-armenian/500.css";
import "@fontsource/noto-sans-armenian/600.css";
import "@fontsource/noto-sans-armenian/900.css";


if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    {/* <React.StrictMode> */}
      <App />
      <ReactQueryDevtools />
    {/* </React.StrictMode> */}
  </QueryClientProvider>
);
