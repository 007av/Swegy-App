import { LOGO_IMG } from "../utils/RETORANT_IMGES.JS";


const HederComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="Logo"
          src={LOGO_IMG}
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

export default HederComponent;