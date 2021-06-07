import React from "react";
import TeslaLogo from "../../assets/TESLA logo/tesla";
const HeaderContainer = () => {
  return (
    <React.Fragment>
      <div
        style={{ width: "120px", position: "absolute", overflowY: "hidden" }}
      >
        <TeslaLogo />
      </div>
    </React.Fragment>
  );
};

export default HeaderContainer;
