import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./Searchbar.scss";

export default function Searchbar(props) {
  const { onSearch, isEnglish } = props;
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };
  const onClick = async (e) => {
    onSearch(search);
  };
  return (
    <div className="searchbar">
      <input
        placeholder={isEnglish ? "Search" : "Buscar"}
        onChange={onChange}
        className="searchbar__input"
      />
      <button onClick={onClick} className="searchbar__btn">
        <BiSearchAlt className="searchbar__btn-icon" />
      </button>
    </div>
  );
}
