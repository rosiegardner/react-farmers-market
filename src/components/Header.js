import React from "react";
import sproutImage from "./../img/sprout.png";

function Header(){
  return (
    <React.Fragment>
      <h1>Rosie's Organics</h1>
      <img src={sproutImage} alt="A sprout" />
    </React.Fragment>
  );
}

export default Header;