import { Search } from "@material-ui/icons";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import "./header.css";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className='header'>
      <img
        className='header__icon'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png'
        alt='airbnb'
      />
      <div className='header__center'>
        <input type='text' />
        <Search />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <div>
          <LanguageIcon />
          <ExpandMoreIcon />
        </div>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
