import React from "react";
import { FaSadCry } from "react-icons/fa";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="notfound">
      <FaSadCry className="notfound__icon" />
      <h3 className="notfound__text">No encontrado</h3>
    </div>
  );
}
