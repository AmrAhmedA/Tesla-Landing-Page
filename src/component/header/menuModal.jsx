import React from "react";
import {
  makeStyles,
  IconButton,
  Fade,
  Backdrop,
  Modal,
  Grid,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  modalContainer: {
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gridWrapper: {
    width: "311px",
    height: "100vh",
    minHeight: "100vh",
    position: "relative",
    paddingBottom: "10px",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    display: "flex",
    animation: `$slide-right-to-left 0.5s ease-in-out`,
  },
  "@keyframes slide-right-to-left": {
    "0%": { transform: "translateX(100%)", opacity: "0" },
    "100%": { transform: "translateX(0%)", opacity: "1" },
  },
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "16px 32px 0px",
    height: "80px",
    top: "0",
    position: "sticky",
    backgroundColor: "white",
  },
  menuItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "6px 12px",
    marginBottom: "12px",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
    },
  },
  menuItemText: {
    textDecoration: "none",
    color: "rgb(57, 60, 65)",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "21px",
    textAlign: "left",
  },
}));
const MenuModal = ({ isVisible, setIsVisible }) => {
  const menuItems = [
    { name: "Existing Inventory" },
    { name: "Used Inventory" },
    { name: "Trade-In" },
    { name: "Test Drive" },
    { name: "Cybertruck" },
    { name: "Roadster" },
    { name: "Semi" },
    { name: "Charging" },
    { name: "Powerwall" },
    { name: "Commercial Energy" },
    { name: "Utilities" },
    { name: "Find Us" },
    { name: "Support" },
  ];
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalContainer}
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
        <Grid className={classes.gridWrapper}>
          <div className={classes.closeButton}>
            <IconButton aria-label="close" onClick={() => setIsVisible(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>

          <ol
            style={{
              listStyleType: "none",
              padding: "0px 32px",
              overflow: "auto",
            }}
          >
            {menuItems.map((item, index) => (
              <li key={index} className={classes.menuItem}>
                <a
                  href={"https://www.facebook.com/amrahmedgewaly/"}
                  className={classes.menuItemText}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default MenuModal;
