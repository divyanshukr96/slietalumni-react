import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {withStyles} from "@material-ui/core/es/styles";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
        footer: {
            marginTop: 10,
            zIndex: 10,
            backgroundColor: theme.palette.background.paper,
            padding: `${theme.spacing.unit}px 0`,
            [theme.breakpoints.up("sm")]: {
                padding: `${theme.spacing.unit * 1}px 8px`,
            }
        },
        container: {
            width: '95%',
            maxWidth: theme.breakpoints.values.lg + 300,
            margin: 'auto',
        },
        footerBottom: {
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.shadows[4],
            padding: 12,
        },

    })
;

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <>
                <footer className={classes.footer}>
                    <Grid container spacing={16} className={classes.container}>
                        <Grid item md={6} sm={12}>
                            <Typography variant={"h6"} gutterBottom>
                                SLIET Alumni Association
                            </Typography>
                            <Typography variant={"body1"} align={"justify"}>
                                Established in 2017, Sliet Alumni Association creates and maintains a lifelong
                                connection
                                between the institute and its alumni. In collaboration with an extremely dedicated
                                volunteer
                                board of directors, the Alumni association works to connect alumni, support students and
                                build an unforgettable experience through a diversity of events, programming and
                                services.
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={6} style={{textAlign: 'right'}}>
                            <Typography variant={"h6"} gutterBottom>
                                Important Link
                            </Typography>
                            <Button component={Link} to={'/about'} size={"small"}>
                                SAA
                            </Button><br/>
                            <Button component={Link} to={'/about'} size={"small"}>
                                SAA
                            </Button>
                        </Grid>
                        <Grid item md={3} xs={6} style={{textAlign: 'right'}}>
                            <Typography variant={"h6"} gutterBottom>
                                Social Link
                            </Typography>
                        </Grid>
                    </Grid>
                </footer>
                <Grid container justify={"center"} className={classes.footerBottom}>
                    <Grid item md={6} xs={12} style={{textAlign: 'center'}}>
                        <Typography>
                            Copyright © {new Date().getFullYear()} Alumni Association, Design & Developed by SAC
                        </Typography>
                    </Grid>
                </Grid>
            </>
        );
    }
}


Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);