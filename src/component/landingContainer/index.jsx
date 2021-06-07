import React from "react";
import ChevonIcon from "../../assets/extra/chevonIcon";
import useStyles from "./styles";
const LandingContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.landingContainer}>
        <div className={classes.bounceWrapper}>
          <span>
            <ChevonIcon />
          </span>
        </div>
        <div
          className={`${classes.landingSection} ${classes.model_S_Container}`}
        ></div>
        <div
          id="section2"
          className={`${classes.landingSection} ${classes.model_Y_Container}`}
        ></div>
        <div
          id="section3"
          className={`${classes.landingSection} ${classes.model_3_Container}`}
        ></div>
        <div
          id="section4"
          className={`${classes.landingSection} ${classes.model_X_Container}`}
        ></div>
        <div
          id="section5"
          className={`${classes.landingSection} ${classes.us_Home}`}
        ></div>
        <div
          id="section6"
          className={`${classes.landingSection} ${classes.solar_Roof}`}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default LandingContainer;
