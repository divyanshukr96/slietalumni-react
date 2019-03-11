import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import Divider from "@material-ui/core/es/Divider/Divider";

const styles = theme => ({
    card: {
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit / 4,
        boxShadow: theme.shadows[0],
        transition: 'all .2s',
        '&:hover': {
            boxShadow: theme.shadows[8],
        },
    }
});

class UpcomingEventWidget extends Component {
    render() {
        const {classes} = this.props;
        return (
            <>
                <Paper style={{padding: 4}}>
                    <Typography variant={"h5"} style={{padding: 4}} gutterBottom>
                        Upcoming Events
                        <Button size={"small"} component={Link} to={'/events'} style={{float: 'right'}}>
                            View All
                        </Button>
                    </Typography>
                    <Divider/>
                    <Paper className={classes.card}>
                        <Typography variant={"h6"}>
                            Abhivyakti
                        </Typography>
                        <Divider/>
                        <Typography>
                            November 17, 2018, became the date that can be written as a golden chapter in the book of
                            history for Sant Longowal Institute of Engineering and Technology. Alumni Meet 2K18, the day
                            became so indelible for the Alumni as they returned home, to the institute that guided them
                            to who they are today. Old friends reunited, nostalgia and memories of past hugged them with
                            a bright smile,
                        </Typography>
                        <Typography variant={"caption"} color={"textSecondary"} style={{textAlign: 'right'}}>
                            <span>Date: February 12, 2019</span>
                        </Typography>
                    </Paper>

                    <Paper className={classes.card}>
                        <Typography variant={"h6"}>
                            Abhivyakti
                        </Typography>
                        <Divider/>
                        <Typography>
                            November 17, 2018, became the date that can be written as a golden chapter in the book of
                            history for Sant Longowal Institute of Engineering and Technology. Alumni Meet 2K18, the day
                            became so indelible for the Alumni as they returned home, to the institute that guided them
                            to who they are today. Old friends reunited,
                        </Typography>
                        <Typography variant={"caption"} color={"textSecondary"} style={{textAlign: 'right'}}>
                            <span>Date: February 12, 2019</span>
                        </Typography>
                    </Paper>
                </Paper>
            </>
        );
    }
}

UpcomingEventWidget.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpcomingEventWidget);