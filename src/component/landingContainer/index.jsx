import React, { useEffect, useState } from "react";
import ChevonIcon from "../../assets/extra/chevonIcon";
import useStyles from "./styles";
const LandingContainer = () => {
  const [offsetY, setOffSetY] = useState(0);

  const handleScroll = () => {
    console.log("triggered");
    setOffSetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      {console.log(offsetY)}

      <div className={classes.landingContainer}>
        <div className={classes.landingLayoutWrapper}>
          <h1 className={classes.landingHeading}>Model S</h1>
          <h2 className={classes.landingSubHeading}>
            Order Online for{" "}
            <a
              style={{ color: "#393c41" }}
              href="https://www.facebook.com/amrahmedgewaly/"
            >
              Touchless Delivery
            </a>
          </h2>
          <div className={classes.landingButtonWrapper}>
            <a
              href="https://www.facebook.com/amrahmedgewaly/"
              className={classes.landingLeftButton}
            >
              Custom Order
            </a>
          </div>
        </div>
        <div className={classes.bounceWrapper}>
          <ChevonIcon />
        </div>

        <div
          className={`${classes.landingSection} ${classes.model_S_Container}`}
        ></div>
        <div
          className={`${classes.landingSection} ${classes.model_Y_Container}`}
        ></div>
        <div
          className={`${classes.landingSection} ${classes.model_3_Container}`}
        ></div>
        <div
          className={`${classes.landingSection} ${classes.model_X_Container}`}
        ></div>
        <div className={`${classes.landingSection} ${classes.us_Home}`}></div>
        <div
          className={`${classes.landingSection} ${classes.solar_Roof}`}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default LandingContainer;
