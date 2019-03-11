import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import FlashMessage from "./components/flashMessage/FlashMessage";

import "./App.css"


const theme = createMuiTheme({
    palette: {
        // type: 'light',
    },
    typography: {
        useNextVariants: true,
    },
});

class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <FlashMessage/>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

export default App;
