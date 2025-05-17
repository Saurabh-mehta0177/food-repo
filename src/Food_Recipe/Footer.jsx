import React from "react";

const Footer = () => {
  return (
    <>
      <div className="last-div "
        style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", backgroundColor: "black" }}
      >
        <a href="#" >
          <i className="fa-brands fa-square-github icon" style={{ color: "#000" }}></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin icon" style={{ color: "#1494f5" }}></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-square-facebook icon" style={{ color: "#2b0797" }}></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-square-whatsapp icon" style={{ color: "#0ff035" }}></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-square-instagram icon" style={{ color: "#fd2be1" }}></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-square-x-twitter icon" style={{color: "#fb2323"}}></i>
        </a>
      </div>
      <div className="bottom-div p-3 bg-light border-rounded">
        <p className="mb-1">
          <i
            className="fa-solid fa-phone-volume end-icon"
            style={{ background: "none" }}
          ></i>
          <span className="text-whit">+91 9431544917 </span>
          || This project is done by <b>Shivam Dubey || </b>
          Studio Name: <b>SSD.Kom || </b>
          All rights reserved @shivam. 2025 || 
          <i
            className="fa-regular fa-envelope end-icon"
            style={{ background: "none" }}
          ></i>
          <span className="text-whit">sivamdby99@gmail.com </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
