import React from "react";
import { Link } from "react-router-dom";
import imageNotFound from "../images/undraw_page_not_found_su7k.svg";
import "./style/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1>¡Page Not Found!</h1>
        <img src={imageNotFound} alt="" />
        <Link to="/">Inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;
