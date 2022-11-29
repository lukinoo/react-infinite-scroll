import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InfiniteScrollContextProvider } from "./Context/InfiniteScrollContext/InfiniteScrollContext";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InfiniteScrollContextProvider>
      <App />
    </InfiniteScrollContextProvider>
  </React.StrictMode>
);
