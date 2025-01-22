import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

// Une autre façon

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
