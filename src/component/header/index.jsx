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
  { name: "Solar Panels" },
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
        <div style={{ width: "25%" }}>
          <h1>
            <TeslaLogo />
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "45%",
          }}
        >
          {navItemsCenter.map((item, index) => {
            return (
              <ol
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 5px",
                  listStyleType: "none",
                  flexGrow: "1",

                  color: "rgb(24, 27, 33)",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "21px",
                }}
              >
                <li key={index}>{item.name}</li>
              </ol>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "25%",
            paddingRight: "32px",
          }}
        >
          {navItemsEnd.map((item, index) => {
            return (
              <ol
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 16px",
                  listStyleType: "none",
                  color: "rgb(24, 27, 33)",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "21px",
                }}
              >
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
