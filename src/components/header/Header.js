import classes from "./Header.module.css";
import Button from "../UI/Button";
import logoImg from "../../assets/logo.png";
import menuIcon from "../../assets/menuIcon.png";
import exitIcon from "../../assets/X.png";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.pgln}>
        <input type="checkbox" id={classes.togglemenu} />
        <label for={classes.togglemenu}>
          <i id={classes.btn}>
            <img src={menuIcon} />
          </i>
        </label>
        <div className={classes.menuBar}>
          <div className={classes.menuExit}>
            <h2>Menu</h2>
            <label for={classes.togglemenu}>
              <i id={classes.btnMenu}>
                <img src={exitIcon} />
              </i>
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

          <div className={classes.menuBottom}>
            <button className={classes.btnTrails}>Start Trial</button>
          </div>
        </div>
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
