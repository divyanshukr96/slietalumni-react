import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Enquiry from "./forms/Enquiry";

const styles = theme => ({
    main: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto',
        padding: theme.spacing.unit,
    }
});

class ContactUs extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main}>
                <Grid container spacing={16}>
                    <Grid item md={6} xs={12}>
                        <Enquiry/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper>
                            <Typography variant={"h5"} component={Paper} style={{padding: 4}}>
                                Address
                            </Typography>
                            <div style={{padding: 8}}>
                                <Typography variant={"body1"}>
                                    Sant Longowal Institute Of Engineering & Technology
                                </Typography>
                                <Typography variant={"body1"} gutterBottom>
                                    Longowal, Sangrur<br/> Punjab - 148106
                                </Typography>
                                <Typography variant={"body1"} gutterBottom>
                                    Email :- alumnicell@sliet.ac.in
                                </Typography>
                                <Typography variant={"body1"} gutterBottom>
                                    Email :- slietalumniassociation@gmail.com
                                </Typography>
                            </div>
                        </Paper>

                        <Paper style={{marginTop: 16}}>
                            <Typography variant={"h5"} component={Paper} style={{padding: 4}}>
                                Map Location
                            </Typography>
                            <div style={{padding: 8}}>
                                <iframe style={{width: '100%'}} title="SLIET map location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.685313658587!2d75.6962570155031!3d30.217527781819726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f8bd26a61ba3%3A0xa45e3a23dfc09f9b!2sSant+Longowal+Institute+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1537822241450"
                                        height="400" allowFullScreen frameBorder={0}/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ContactUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactUs);