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
  bounceWrapper: {
    opacity: 1,
    position: "absolute",
    bottom: "20px",
    // left: "50%",
    right: "50%",
    // marginLeft: "-16px",
    // display: "block",
    // width: 48px,
    // height: 48px,
    // border: 2px solid white,
    // background-size: 14px auto,
    // border-radius: 50%,
    // z-index: 2,
    // -webkit-animation: bounce 2s infinite 2s,
    // animation: bounce 2s infinite 2s,
    // transition: all .2s ease-in,
    // -webkit-animation: bounce 2s infinite 2s,
    // animation: bounce 2s infinite 2s,
    // transition: all .2s ease-in,
  },
}));

export default useStyles;
