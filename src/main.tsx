// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import "./index.css";
import { client } from "./utils/apollo.ts";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </ApolloProvider>
);
