import { makeStyles } from "@material-ui/core";
import React from "react";
import TeslaLogo from "../../assets/TESLA logo/tesla";
const useStyles = makeStyles((theme) => ({}));

const navItemsCenter = [
  { name: "Model S" },
  { name: "Model 3" },
  { name: "Model X" },
  { name: "Model Y" },
  { name: "Solar Roof" },
  { name: "Solar Panel" },
];
const navItemsEnd = [{ name: "Shop" }, { name: "Account" }, { name: "Menu" }];
const HeaderContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "54px",
          justifyContent: "space-between",
          width: "100%",
          position: "absolute",
        }}
      >
        <h1>
          <TeslaLogo />
        </h1>
        {navItemsCenter.map((item, index) => {
          return (
            <ol
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 8px",
                listStyleType: "none",

                color: "rgb(24, 27, 33)",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "21px",
                // width: "50%",
              }}
            >
              <li key={index}>{item.name}</li>
            </ol>
          );
        })}

        {navItemsEnd.map((item, index) => {
          return (
            <ol
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 8px",
                listStyleType: "none",

                color: "rgb(24, 27, 33)",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "21px",
                // width: "50%",
              }}
            >
              <li key={index}>{item.name}</li>
            </ol>
          );
        })}
      </header>
    </React.Fragment>
  );
};

export default HeaderContainer;
