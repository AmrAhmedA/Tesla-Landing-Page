import React from "react";
import TeslaLogo from "../../assets/TESLA logo/tesla";
import useStyles from "./styles";
const navItemsCenter = [
  { name: "Model S" },
  { name: "Model 3" },
  { name: "Model X" },
  { name: "Model Y" },
  { name: "Solar Roof" },
  { name: "Solar Panels" },
];
const navItemsEnd = [{ name: "Shop" }, { name: "Account" }, { name: "Menu" }];
const HeaderContainer = () => {
  const {
    navHeader,
    navCenter,
    navEnd,
    navItemsCenterContainer,
    navItemsEndContainer,
  } = useStyles();
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
                <li key={index}>{item.name}</li>
              </ol>
            );
          })}
        </div>
      </header>
    </React.Fragment>
  );
};

export default HeaderContainer;
