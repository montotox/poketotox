import React from "react";
import Logo from "../../assets/svg/logo.svg";
import Spanish from "../../assets/svg/spain.svg";
import English from "../../assets/svg/us.svg";
import "./Appbar.scss";

export default function Appbar(props) {
  const { isEnglish, setIsEnglish } = props;
  const changeLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const language = isEnglish ? (
    <img src={Spanish} alt="spanish" onClick={changeLanguage} />
  ) : (
    <img src={English} alt="english" onClick={changeLanguage} />
  );
  return (
    <div className="app-bar">
      <div className="language">{language}</div>
      <div className="logo">
        <img src={Logo} alt="logo" className="logo__img" />
      </div>
    </div>
  );
}
