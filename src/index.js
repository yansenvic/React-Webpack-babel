import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

//reactDOM render version react17
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<h1>Hello World</h1>);
