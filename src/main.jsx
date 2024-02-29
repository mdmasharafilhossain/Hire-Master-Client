import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Comonents/Routes/Routes.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./Comonents/AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <RouterProvider router={router} />
            <Toaster position='top-right' reverseOrder={false} />
          </ChakraProvider>
        </QueryClientProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
