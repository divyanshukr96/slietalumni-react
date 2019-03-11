import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
    main: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto',
        padding: theme.spacing.unit,
    }
});

class About extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main}>
                <img src="https://www.slietalumni.com/images/saa-about.jpg" alt="" width="100%"/>
                <Grid container spacing={8} justify={"center"} style={{marginTop: 4}}>
                    <Grid item md={8} sm={12}>
                        <Typography component={Paper} variant={"h6"} style={{padding: 8}} gutterBottom>
                            About SLIET Alumni Association
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography component={Paper} variant={"h6"} style={{padding: 8}}>
                            SAA Certificate
                        </Typography>
                        <div style={{padding: 16}}>
                            <img src="https://www.slietalumni.com/images/saa-certificate.jpeg" alt="SAA Certificate"
                                 width="100%"/>
                        </div>
                    </Grid>
                    <Grid item md={8}>
                        <Typography component={Paper} variant={"h6"} style={{padding: 8}} gutterBottom>
                            SAA Constitutions
                        </Typography>
                        <img src="https://www.slietalumni.com/images/saa-certificate.jpeg" alt="SAA Certificate"
                             width="100%"/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);