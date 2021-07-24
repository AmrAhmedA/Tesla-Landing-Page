import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "54px",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
  },
  navItemsCenterContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
  },
  navCenter: {
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
    transition: "0.2s ease-in",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
    },
  },
  navItemsEndContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "25%",
    paddingRight: "32px",
  },
  navEnd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 16px",
    listStyleType: "none",
    color: "rgb(24, 27, 33)",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "21px",
    transition: "0.2s ease-in",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
    },
  },
}));

export default useStyles;
