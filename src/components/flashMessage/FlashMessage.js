import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import { SnackbarProvider } from "notistack";
import {withStyles} from "@material-ui/core";
import {amber, green} from "@material-ui/core/colors";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Notifier from "./Notifier";

const styles = theme => ({
    success: { backgroundColor: green[600] },
    error: { backgroundColor: theme.palette.error.dark },
    info: { backgroundColor: theme.palette.primary.dark },
    warning: { backgroundColor: amber[700] },
});

class FlashMessage extends Component {
    render() {

        const {classes} = this.props;

        return (
            <SnackbarProvider
                maxSnack={1}
                classes={{
                    variantSuccess: classes.success,
                    variantError: classes.error,
                    variantWarning: classes.warning,
                    variantInfo: classes.info,
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                    >
                        <CloseIcon className={classes.icon} fontSize={"small"}/>
                    </IconButton>,
                ]}
            >
                <Notifier/>
            </SnackbarProvider>
        );
    }
}

FlashMessage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlashMessage);