import classes from "./Badges.module.css";
import imgBd from "../assets/bdImg.png";
import Button from "./UI/Button";
import PlaceHolder from "../components/UI/PlaceHolder";

const Badges = (props) => {
  return (
    <div className={classes.jrnCnt}>
      <div className={classes.jrLf}>
        <p> Badges </p>
        <h1>
          With Traceabl know the journey of your products, with easy tracking
          and tracing
        </h1>
        <PlaceHolder plc="Schedule a call" className={classes.plc}></PlaceHolder>
        <Button className={classes.btn}> Schedule a call </Button>
      </div>
      <img src={imgBd} alt="loading" />
    </div>
  );
};

export default Badges;
