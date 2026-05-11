import React from "react";
import ReactDom from "react-dom/client";

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

const HederComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="Logo"
          src="https://imgs.search.brave.com/_MSZf0ekceEBuypjxGKky0pdKsVmD5QTlgpvs9QGqsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDUv/NzYzLzk3NS9zbWFs/bC9ob3QtY2hpbGkt/ZmlyZS1mb3ItaG90/LWZvb2QtbG9nby1k/ZXNpZ24taWNvbi1z/eW1ib2wtZnJlZS12/ZWN0b3IuanBn"
        ></img>
      </div>
      <div className="Links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>LogIn</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCards = () => {
  return (
    <div className="RetroCards">
      
        <img
          className="res-img"
          alt="image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/6fe76e38-93ec-4b41-b91b-af5d7d29b6e7_1041221.jpg"
        />
      
      <h2 className="Restorant-name">Meghna Foods</h2><h3>Biryani,Chiken Biryani</h3>

     

    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">
        <input placeholder="Food,Restorant,etc"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
      </div>
    </div>
  );
};

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
