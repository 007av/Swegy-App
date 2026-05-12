import React from "react";
import ReactDom from "react-dom/client";
import HederComponent from "./Components/HeaderComponent";
import RestroCards from "./Components/RestroCards";
import Body from "./Components/Body";

const heading = <h1 id="heading">Namsete React 🚀</h1>;

/*
Header
Logo
NavBar
Body- 
Search Button
RestorantContainer-
- RestroCards-
Img
Name of restro, Star Rating, cusines, etc.
Fotter-
CopyRight
Links
Address
Contact
**/


const AppLayout = () => {
  return (
    <div className="app">
      <HederComponent />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
