import React from "react";
import { Helmet } from "react-helmet";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Navigation from "../blocks/Navigation";
import theme, { GlobalStyle } from "../theme";

const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Navigation children={children} />
        </>
      </MuiThemeProvider>
    </React.StrictMode>
  );
};

export default Layout;
