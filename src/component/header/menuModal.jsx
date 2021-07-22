import React from "react";
import { IconButton, Fade, Backdrop, Modal, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const MenuModal = ({ isVisible, setIsVisible }) => {
  const menuItems = [
    { name: "Existing Inventory" },
    { name: "Used Inventory" },
    { name: "Trade-In" },
    { name: "Test Drive" },
    { name: "Cybertruck0" },
    { name: "Roadster" },
    { name: "Semi" },
    { name: "Charging" },
    { name: "Powerwall" },
    { name: "Commercial Energy" },
    { name: "Utilities" },
    { name: "Find Us" },
    { name: "Support" },
  ];
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      style={{
        display: "flex",
        position: "fixed",
        alignItems: "center",
        justifyContent: "flex-end",
        // overflow: "auto",
      }}
      open={isVisible}
      onClose={() => setIsVisible(false)}
      disableAutoFocus
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isVisible}>
        <Grid
          style={{
            width: "311px",
            height: "100vh",
            maxWidth: "90vw",
            position: "relative",
            paddingBottom: "10px",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "32px 32px 0px",
            }}
          >
            <IconButton aria-label="delete">
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
          <div>
            <ol style={{ listStyleType: "none", padding: "0px 32px" }}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={"https://www.facebook.com/amrahmedgewaly/"}
                    style={{
                      textDecoration: "none",
                      color: "rgb(57, 60, 65)",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "21px",
                      textAlign: "left",
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default MenuModal;