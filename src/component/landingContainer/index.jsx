import { Grid } from "@material-ui/core";
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

  const content = [
    {
      name: "Model S",
      subHeading: "Order Online for Touchless Delivery",
      buttons: 2,
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      name: "Model Y",
      subHeading: "Order Online for Touchless Delivery",
      buttons: 2,
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      name: "Model 3",
      subHeading: "Order Online for Touchless Delivery",
      buttons: 2,
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      name: "Model X",
      subHeading: "Order Online for Touchless Delivery",
      buttons: 2,
      leftButtonText: "Custom Order",
      rightButtonText: "Existing Inventory",
    },
    {
      name: "Solar Panel",
      subHeading: "Lowest Cost Solar Panels in America",
      buttons: 2,
      leftButtonText: "Order Now",
      rightButtonText: "Learn More",
    },
    {
      name: "Solar Roof",
      subHeading: "Produce Clean Energy From Your Roof",
      buttons: 2,
      leftButtonText: "Order Now",
      rightButtonText: "Learn More",
    },
    {
      name: "Accessories",
      subHeading: "",
      buttons: 1,
      buttonText: "Shop Now",
    },
  ];
  return (
    <React.Fragment>
      {console.log(offsetY)}

      <div className={classes.landingContainer}>
        <div className={classes.landingLayoutWrapper}>
          <div className={classes.landingHeadingWrapper}>
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
          </div>
          <Grid
            container
            spacing={3}
            item
            sm={12}
            className={classes.landingButtonWrapper}
          >
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              item
              xs={12}
              sm={6}
              className={classes.leftButtonGrid}
            >
              <a
                href="https://www.facebook.com/amrahmedgewaly/"
                className={classes.landingLeftButton}
              >
                Custom Order
              </a>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              className={classes.rightButtonGrid}
            >
              <a
                href="https://www.facebook.com/amrahmedgewaly/"
                className={classes.landingRightButton}
              >
                Existing Inventory
              </a>
            </Grid>
          </Grid>
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
