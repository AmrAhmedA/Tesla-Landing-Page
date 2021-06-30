import model_S_Desktop from "../../assets/background/Model S/ms-homepage-desktop.jpg";
import model_S_Mobile from "../../assets/background/Model S/ms-homepage-mobile.jpg";
import model_y_Desktop from "../../assets/background/Model Y/Desktop-ModelY.jpg";
import model_y_Mobile from "../../assets/background/Model Y/Mobile-ModelY.jpg";
import model_3_Desktop from "../../assets/background/Model 3/m3-homepage-desktop.jpg";
import model_3_Mobile from "../../assets/background/Model 3/m3-homepage-mobile.jpg";
import model_X_Desktop from "../../assets/background/Model X/mx-homepage-desktop.jpg";
import model_X_Mobile from "../../assets/background/Model X/mx-homepage-mobile.jpg";
import US_Home_Desktop from "../../assets/background/US Home/us_homepage_sp_hero_d.jpg";
import US_Home_Mobile from "../../assets/background/US Home/sp_homepage_m.jpg";
import Solar_Roof_Desktop from "../../assets/background/solar roof/solar-roof-hero-desktop.jpg";
import Solar_Roof_Mobile from "../../assets/background/solar roof/solar-roof-hero-mobile.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    overflowY: "scroll",
    overflowX: "hidden",
    height: "100vh",
    scrollSnapType: "y mandatory",
    "&::-webkit-scrollbar": {
      width: "0.6em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#eee9e9",
      borderRadius: "10px",
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.2)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#cccccc",
      /* outline: 1px solid slategrey; */
      borderRadius: "10px",
    },
  },
  landingSection: {
    minHeight: "100vh",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    scrollSnapAlign: "start",
  },
  model_S_Container: {
    backgroundImage: `url(${model_S_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${model_S_Mobile})`,
    },
  },
  model_Y_Container: {
    backgroundImage: `url(${model_y_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${model_y_Mobile})`,
    },
  },
  model_3_Container: {
    backgroundImage: `url(${model_3_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${model_3_Mobile})`,
    },
  },
  model_X_Container: {
    backgroundImage: `url(${model_X_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${model_X_Mobile})`,
    },
  },
  us_Home: {
    backgroundImage: `url(${US_Home_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${US_Home_Mobile})`,
    },
  },
  solar_Roof: {
    backgroundImage: `url(${Solar_Roof_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${Solar_Roof_Mobile})`,
    },
  },
  landingHeading: {
    fontSize: "40px",
    WebkitFontSmoothing: "antialiased",
    marginBlock: "0em",
    padding: "4px 0",
    animation: `$landing-transform 0.5s ease-in-out 0s`,
  },
  "@keyframes landing-transform": {
    "0%": {
      opacity: 0,
      transform: "translateY(50%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  landingSubHeading: {
    fontSize: "14px",
    fontWeight: "400",
    WebkitFontSmoothing: "antialiased",
    animation: `$sub-heading-fade 1s ease-in-out 0s`,
  },
  "@keyframes sub-heading-fade": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  landingLayoutWrapper: {
    position: "sticky",
    top: "15vh",
    marginTop: "-75vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-63vh",
    },
  },
  landingHeadingWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#393c41",
  },
  landingButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "calc(50vh + 20px)",
    boxSizing: "border-box",
    textAlign: "center",
    opacity: "1",
    [theme.breakpoints.down("sm")]: {
      marginTop: "calc(38vh + 20px)",
    },
  },
  leftButtonGrid: {
    direction: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      direction: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    animation: `$left-button-fade 1s ease-in-out 0s`,
  },
  "@keyframes left-button-fade": {
    "0%": {
      opacity: 0,
      transform: "translateX(-10%)",
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  rightButtonGrid: {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      direction: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    animation: `$right-button-fade 1s ease-in-out 0s`,
  },
  "@keyframes right-button-fade": {
    "0%": {
      opacity: 0,
      transform: "translateX(10%)",
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  landingLeftButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "24px",
    padding: "5px 40px",
    margin: "0 8px",
    // text
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "14.4px",
    textAlign: "center",
    textDecorationColor: "rgb(255, 255, 255)",
    textDecorationLine: "none",
    textDecorationStyle: "solid",
    textDecorationThickness: "auto",
    textSizeAdjust: "100%",
    textTransform: "uppercase",
    // appearance
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgba(23, 26, 32, 0.8)",
    borderBottomColor: "rgba(0, 0, 0, 0)",
    borderBottomStyle: "solid",
    borderBottomWidth: "3px",
    borderImageOutset: "0",
    borderImageRepeat: "stretch",
    borderImageSlice: "100%",
    borderImageSource: "none",
    borderImageWidth: "1",
    borderLeftColor: "rgba(0, 0, 0, 0)",
    borderLeftStyle: "solid",
    borderLeftWidth: "3px",
    borderRightColor: "rgba(0, 0, 0, 0)",
    borderRightStyle: "solid",
    borderRightWidth: "3px",
    borderTopColor: "rgba(0, 0, 0, 0)",
    borderTopStyle: "solid",
    borderTopWidth: "3px",
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px inset",
    cursor: "pointer",
    outlineColor: "rgb(255, 255, 255)",
    outlineStyle: "none",
    outlineWidth: "0px",
    borderRadius: "25px",
    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },
  },

  landingRightButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "24px",
    padding: "5px 40px",
    margin: "0 8px",
    // text
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "14.4px",
    textAlign: "center",
    textDecorationColor: "rgba(23, 26, 32, 0.8)",
    textDecorationLine: "none",
    textDecorationStyle: "solid",
    textDecorationThickness: "auto",
    textSizeAdjust: "100%",
    textTransform: "uppercase",
    // appearance
    color: "rgb(23, 26, 32)",
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    borderBottomColor: "rgba(0, 0, 0, 0)",
    borderBottomStyle: "solid",
    borderBottomWidth: "3px",
    borderImageOutset: "0",
    borderImageRepeat: "stretch",
    borderImageSlice: "100%",
    borderImageSource: "none",
    borderImageWidth: "1",
    borderLeftColor: "rgba(0, 0, 0, 0)",
    borderLeftStyle: "solid",
    borderLeftWidth: "3px",
    borderRightColor: "rgba(0, 0, 0, 0)",
    borderRightStyle: "solid",
    borderRightWidth: "3px",
    borderTopColor: "rgba(0, 0, 0, 0)",
    borderTopStyle: "solid",
    borderTopWidth: "3px",
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px inset",
    cursor: "pointer",
    outlineColor: "rgb(255, 255, 255)",
    outlineStyle: "none",
    outlineWidth: "0px",
    borderRadius: "25px",
    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },
  },
  bounceWrapper: {
    opacity: 1,
    position: "absolute",
    bottom: "20px",
    right: "50%",
    display: "block",
    zIndex: 1,
    WebkitAnimation: `$bounce 2s infinite 2s`,
    animation: `$bounce 2s infinite 2s`,
    // transition: all .2s ease-in,
  },
  "@keyframes bounce": {
    "0%": { transform: "translateY(0)" },
    "10%": { transform: "translateY(0)" },
    "30%": { transform: "translateY(-6px)" },
    "50%": { transform: "translateY(0)" },
    "57%": { transform: "translateY(-3px)" },
    "64%": { transform: "translateY(0)" },
    "100%": { transform: "translateY(0)" },
  },
}));

export default useStyles;
