import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "react-table/react-table.css";
import './style.scss'
import Color from "../_constants/Color";

const theme = createMuiTheme({
  palette: {
    primary: { main: Color.primary }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "\"Segoe UI\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif,\n" +
      "\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    fontSize: 12,
  },
  shape: {
    borderRadius: 6
  }
});

class StylesProvider extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default StylesProvider;
