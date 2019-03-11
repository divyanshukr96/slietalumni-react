import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";

const styles = theme => ({});

class Events extends Component {
    render() {
        const {classes} = this.props;
        return (
            <>

            </>
        );
    }
}

Events.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Events);