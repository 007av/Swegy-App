import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement("div", {
    id: "parent"
},[
    React.createElement("h1", {key: "h1"}, "Im h1 tag"),
    React.createElement("h2", {key: "h2"}, "Im h2 tag")
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);