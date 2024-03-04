import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./Login.tsx";
import App from "./App.tsx";
import Itinerary from "./Itinerary.tsx";
import Ncaa from "./Ncaa.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <Login />
      <Itinerary />
      <Ncaa />
    </ChakraProvider>
  </React.StrictMode>
);
