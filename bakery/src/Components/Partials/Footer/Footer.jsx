import React from "react";
import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="circle">
        <img src={require("../../../Images/chevron.png")} alt="arrow" />
      </div>
      <div className="container">
        <h3>bageriet</h3>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men det fleste
          udgaver har gennemgået forandringer.
        </p>
        <div className="shadow">
          <p>Copyright © 2017 bageriet aps</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
