import React, { useEffect, useState } from "react";
import ChevonIcon from "../../assets/extra/chevonIcon";
import useStyles from "./styles";
const LandingContainer = () => {
  const [offsetY, setOffSetY] = useState(0);

  const handleScroll = () => {
    console.log("triggered");
    // setOffSetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOnScroll = () => {
    console.log("Scrolled");
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      {console.log(offsetY)}
      <div className={classes.landingContainer}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "calc(12vh + 20px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#393c41",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              WebkitFontSmoothing: "antialiased",
              marginBlock: "0em",
              padding: "4px 0",
            }}
          >
            Model S
          </h1>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "400",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            Order Online for{" "}
            <a
              style={{ color: "#393c41" }}
              href="https://www.facebook.com/amrahmedgewaly/"
            >
              Touchless Delivery
            </a>
          </h2>
        </div>

        <div className={classes.bounceWrapper}>
          <ChevonIcon />
        </div>

        <div
          className={`${classes.landingSection} ${classes.model_S_Container}`}
        ></div>
        <div
          onScroll={() => console.log("testing")}
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
