import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({});

class ChapterWidget extends Component {
    render() {
        const {classes} = this.props;
        return (
            <>
                <Paper>
                    <Typography variant={"h6"} style={{padding: 4}}>
                        Chapter <Button style={{float: 'right'}}>View All</Button>
                    </Typography>
                </Paper>
            </>
        );
    }
}

ChapterWidget.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChapterWidget);