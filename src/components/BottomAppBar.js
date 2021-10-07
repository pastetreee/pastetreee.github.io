import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    top: "auto",
  },
  toolbar: {
    minHeight: "30px",
  },
}));

export default function BottomAppBar(props) {
  const curTheme = props.curTheme;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          background: curTheme === "light" ? "white" : "#363537",
          color: "inherit",
          zIndex: 999,
        }}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <a href="https://pastetreee.tk" style={{ color: "inherit" }}>
            <small>&copy; Copyright 2021, Pastetree</small>
          </a>
          <div style={{ margin: "8px" }}>
            <a href="https://github.com/rushic24/cherrytree-clone" style={{ color: "inherit" }}>
              <h4 style={{ margin: 0 }}>Source</h4>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
