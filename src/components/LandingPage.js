import classes from "./LandingPage.module.css";
import React, { Fragment } from "react";
import Header from "./header/Header";
import Button from "./UI/Button";

const LandingPage = () => {
  return (
    <Fragment>
      <div className={classes.landBck}>
        <Header />
        <div className={classes.lanCont}>
          <div className={classes.midCont}>
            <h1> Product journey made transparent </h1>{" "}
            <p>All your company 's supply chain operation in one tool box </p>{" "}
            <form>
              <Button type="button"> Start free trial </Button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </Fragment>
  );
};

export default LandingPage;
