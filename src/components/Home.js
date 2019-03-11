import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/es/Typography/Typography";
import Carousel from "./Carousel";
import WelcomeAndMessage from "./Widgets/WelcomeAndMessage";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";
import UpcommingEvent from "./Widgets/UpcomingEventWidget";
import Chapter from "./Widgets/ChapterWidget";

const styles = theme => ({
    main: {
        maxWidth: theme.breakpoints.values.xl - 200,
        padding: theme.spacing.unit,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.unit * 2,
        },
        margin: 'auto',
        marginTop: theme.spacing.unit,
    },
});

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
            <>
                <Carousel/>
                <div className={classes.main}>
                    <WelcomeAndMessage/>

                    <Grid container spacing={8}>
                        <Grid item md={4}>
                          <Chapter/>
                        </Grid>
                        <Grid item md={5}>
                            <Paper>
                                <Typography variant={"h6"} style={{padding: 4}}>
                                    Stories <Button style={{float: 'right'}}>View All</Button>
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={3}>
                            <UpcommingEvent/>
                        </Grid>
                    </Grid>

                    {/*<Typography>Hello Divyanshu</Typography>*/}
                </div>
            </>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);