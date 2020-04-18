import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import React from "react";
import { makeStyles } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  console.log({ props, ref });
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paperRoot: (props) => ({
    width: theme.typography.pxToRem(props.width),
    maxWidth: theme.typography.pxToRem(props.maxWidth),
  }),
  closeBtn: {
    color: "#ccc",
    cursor: "pointer",
    padding: "0 .5rem",
    zIndex: "999",
    fontSize: "2rem",
    transition: "all .5s",
    width: "2.2rem",
    height: "2.2rem",
    marginLeft: "auto",
    textAlign: "center",

    "&:hover": {
      color: "#ccccccad",
    },
  },
}));

const PrimaryDialog = React.memo((props) => {
  const {
    openPrimary,
    togglePrimary,
    hideCrossBtn,
    children,
    scrollType,
  } = props;

  const classes = useStyles(props);

  return (
    <Dialog
      open={openPrimary}
      scroll={scrollType}
      TransitionComponent={Transition}
      transitionDuration={400}
      // keepMounted
      onClose={togglePrimary}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      classes={{ paper: classes.paperRoot }}
    >
      {!hideCrossBtn && (
        <div onClick={togglePrimary} className={classes.closeBtn}>
          &#10005;
        </div>
      )}
      {children}
    </Dialog>
  );
});

export default PrimaryDialog;
