import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Comonents/Routes/Routes.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./Comonents/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
    </AuthProvider>

    
  </React.StrictMode>
);
