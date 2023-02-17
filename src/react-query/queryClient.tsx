import React from "react";
import { QueryClient } from "@tanstack/react-query";



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      onError: (error) => {
        const title =
          error instanceof Error
            ? error.toString().replace(/^Error:\s*/, "")
            : "error to connecting the server";
        console.log(title);
      },
    },
  },
});
