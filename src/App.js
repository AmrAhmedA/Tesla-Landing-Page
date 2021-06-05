import React from 'react';
import './App.css';
import HeaderContainer from './component/header';


function App() {
  return (
    // <Container maxWidth="xl">
    <React.Fragment>

      <div className="model-s-container">
        <HeaderContainer />
      </div>
      <div className="model-s-container">
      </div>
    </React.Fragment>
    // </Container>
  );
}

export default App;
