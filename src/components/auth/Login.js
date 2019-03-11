import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import LoginForm from "./LoginForm";

const styles = theme => ({
    main: {
        width: 'auto',
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            margin: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: '3rem',
        },
    },
});

class Login extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main}>
                <LoginForm/>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);