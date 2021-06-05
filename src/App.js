import './App.css';
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import HeaderContainer from './component/header';
// import * as Scroll from 'react-scroll';
import model_S_Desktop from "../src/assets/background/Model S/ms-homepage-desktop.jpg"
import model_S_Mobile from "../src/assets/background/Model S/ms-homepage-mobile.jpg"
import model_y_Desktop from "../src/assets/background/Model Y/Desktop-ModelY.jpg"
import model_y_Mobile from "../src/assets/background/Model Y/Mobile-ModelY.jpg"

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
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

  }
}));
function App() {
  const [offsetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  const classes = useStyles();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  console.log(offsetY);
  return (
    // <Container maxWidth="xl">
    <React.Fragment>

      <div className={`${classes.landingContainer} ${classes.model_S_Container}`}>
        <HeaderContainer />
      </div>
      <div className={`${classes.landingContainer} ${classes.model_Y_Container}`}>
      </div>
    </React.Fragment>
    // </Container>
  );
}

export default App;
