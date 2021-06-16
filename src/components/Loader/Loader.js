import React from "react";
import "./Loader.scss";
import Pokeball from "../../assets/svg/Pokeball.svg";

export default function Loader() {
  return (
    <div className="loading">
      <img src={Pokeball} alt="loading" className="loading__img" />
    </div>
  );
}
