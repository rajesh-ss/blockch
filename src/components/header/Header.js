import classes from "./Header.module.css";
import Button from "../UI/Button";
import logoImg from "../../assets/logo.png";
import { useState } from "react";

const Header = (props) => {
  const [menuToggle, setmenuToggle] = useState(false);

  return (
    <div className={classes.header}>
      <div className={classes.pgln}>
        <div className={classes.menuIcon}>
          <input type="checkbox" id={classes.togglemenu} />
          <label for={classes.togglemenu}>
            <i className="fas fa-bars" id={classes.btn}></i>
            <i className="fas fa-times" id={classes.cancel}></i>
          </label>
        </div>
        <ul>
          <li>
            <a href="/"> Services </a>
          </li>
          <li>
            <a href="/"> Industry </a>
          </li>
          <li>
            <a href="/"> About </a>
          </li>
          <li>
            <a href="/"> Contact Us </a>
          </li>
        </ul>
      </div>
      <div className={classes.imgCont}>
        <img src={logoImg} alt="logo" />
      </div>
      <div className={classes.btnCont}>
        <Button className={classes.btnLg}> Login </Button>
        <Button className={classes.btnCn}> Free trail </Button>
      </div>
    </div>
  );
};

export default Header;
