import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});

export const GlobalStyle = createGlobalStyle`
  ${reset},

`;

export default theme;
