import React from "react";
import { useState } from "react";
import TeslaLogo from "../../assets/TESLA logo/tesla";
import MenuModal from "./menuModal";
import useStyles from "./styles";

const HeaderContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    navHeader,
    navCenter,
    navEnd,
    navItemsCenterContainer,
    navItemsEndContainer,
  } = useStyles();

  const handleMenuClick = () => {
    console.log(isVisible);
    setIsVisible(!isVisible);
  };

  const navItemsCenter = [
    { name: "Model S" },
    { name: "Model 3" },
    { name: "Model X" },
    { name: "Model Y" },
    { name: "Solar Roof" },
    { name: "Solar Panels" },
  ];

  const navItemsEnd = [
    { name: "Shop", button: handleMenuClick },
    { name: "Account", button: handleMenuClick },
    { name: "Menu", button: handleMenuClick },
  ];

  return (
    <React.Fragment>
      <header className={navHeader}>
        <div style={{ width: "25%" }}>
          <h1>
            <TeslaLogo />
          </h1>
        </div>
        <div className={navItemsCenterContainer}>
          {navItemsCenter.map((item, index) => {
            return (
              <ol key={index} className={navCenter}>
                <li key={index}>{item.name}</li>
              </ol>
            );
          })}
        </div>

        <div className={navItemsEndContainer}>
          {navItemsEnd.map((item, index) => {
            return (
              <ol key={index} className={navEnd}>
                <li
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={item.button}
                >
                  {item.name}
                </li>
              </ol>
            );
          })}
        </div>
        <MenuModal isVisible={isVisible} setIsVisible={setIsVisible} />
      </header>
    </React.Fragment>
  );
};

export default HeaderContainer;
