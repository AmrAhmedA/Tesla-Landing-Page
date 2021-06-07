import './App.css';
import React from 'react';
import HeaderContainer from './component/header';
// import * as Scroll from 'react-scroll';
import LandingContainer from './component/landingContainer';

function App() {

  return (
    <React.Fragment>
      <HeaderContainer />
      <LandingContainer />

    </React.Fragment>
  );
}

export default App;
