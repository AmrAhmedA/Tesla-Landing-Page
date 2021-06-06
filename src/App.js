import './App.css';
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import HeaderContainer from './component/header';
import * as Scroll from 'react-scroll';
import model_S_Desktop from "../src/assets/background/Model S/ms-homepage-desktop.jpg"
import model_S_Mobile from "../src/assets/background/Model S/ms-homepage-mobile.jpg"
import model_y_Desktop from "../src/assets/background/Model Y/Desktop-ModelY.jpg"
import model_y_Mobile from "../src/assets/background/Model Y/Mobile-ModelY.jpg"
import model_3_Desktop from "../src/assets/background/Model 3/m3-homepage-desktop.jpg"
import model_3_Mobile from "../src/assets/background/Model 3/m3-homepage-mobile.jpg"
import model_X_Desktop from "../src/assets/background/Model X/mx-homepage-desktop.jpg"
import model_X_Mobile from "../src/assets/background/Model X/mx-homepage-mobile.jpg"
import US_Home_Desktop from "../src/assets/background/US Home/us_homepage_sp_hero_d.jpg"
import US_Home_Mobile from "../src/assets/background/US Home/sp_homepage_m.jpg"
import Solar_Roof_Desktop from "../src/assets/background/solar roof/solar-roof-hero-desktop.jpg"
import Solar_Roof_Mobile from "../src/assets/background/solar roof/solar-roof-hero-mobile.jpg"
let scroller = Scroll.scroller;
// let scroll = Scroll.animateScroll;
const useStyles = makeStyles((theme) => ({
  landingContainer: {
    overflowY: "scroll",
    height: "100vh",
    scrollSnapType: "y mandatory",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#eee9e9",
      borderRadius: "10px",
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.2)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#0C4A70",
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
    }
  },
  model_Y_Container: {
    backgroundImage: `url(${model_y_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${model_y_Mobile})`,
    }

  },
  model_3_Container: {
    backgroundImage: `url(${model_3_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${model_3_Mobile})`,
    }
  },
  model_X_Container: {
    backgroundImage: `url(${model_X_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${model_X_Mobile})`,
    }
  },
  us_Home: {
    backgroundImage: `url(${US_Home_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${US_Home_Mobile})`,
    }
  },
  solar_Roof: {
    backgroundImage: `url(${Solar_Roof_Desktop})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${Solar_Roof_Mobile})`,
    }
  }
}));
function App() {
  // const [offsetY, setOffSetY] = useState(0);
  const classes = useStyles();

  // const handleScroll = (e) => {
  //   // console.log(e);
  //   setOffSetY(window.pageYOffset)
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [])

  // useEffect(() => {
  //   if (Math.round(offsetY) === 100) {
  //     scroller.scrollTo("section2", {
  //       delay: 100,
  //       duration: 200,
  //       smooth: true
  //     })
  //   }
  //   console.log("test")
  // }, [offsetY]);


  // const handlescrollin = () => {
  //   console.log("fired")
  //   scroller.scrollTo("section2", {
  //     delay: 100,
  //     duration: 200,
  //     smooth: true
  //   })
  // }

  // console.log(offsetY);

  return (
    // <Container maxWidth="xl">
    <React.Fragment>

      {/* <div style={{ overflow: "hidden" }} > */}
      <div className={classes.landingContainer}>
        <div
          //  onScroll={handlescrollin()}
          className={`${classes.landingSection} ${classes.model_S_Container}`}>
          <HeaderContainer />
        </div>
        <div id="section2" className={`${classes.landingSection} ${classes.model_Y_Container}`}>
        </div>
        <div id="section3" className={`${classes.landingSection} ${classes.model_3_Container}`}>
        </div>
        <div id="section4" className={`${classes.landingSection} ${classes.model_X_Container}`}>
        </div>
        <div id="section5" className={`${classes.landingSection} ${classes.us_Home}`}>
        </div>
        <div id="section6" className={`${classes.landingSection} ${classes.solar_Roof}`}>
        </div>
      </div>

      {/* </div> */}
    </React.Fragment>
    // </Container>
  );
}

export default App;
