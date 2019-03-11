import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
    main: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto',
        padding: theme.spacing.unit,
    },
    card: {
        transition: 'all .2s',
        '&:hover': {
            boxShadow: theme.shadows[12],
        }
    },
    media: {
        height: 220,
        // width: 250,
        // margin: 'auto',
        backgroundSize: 'contain',
        // borderRadius: '50%',
    },
    content: {
        padding: 8,
    },
    action: {
        textAlign: 'right'
    },
});

class AdvisoryCommittee extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main}>
                <Typography component={Paper} variant={"h5"} style={{padding: 8}}>
                    Advisory Committee
                </Typography>
                <Grid container spacing={16} style={{marginTop: 8}}>
                    <Grid item md={4} sm={12}>
                        <Card className={classes.card}>
                            <CardActionArea component={Link} to={'/message/director'}>
                                <CardMedia
                                    className={classes.media}
                                    image="https://www.slietalumni.com/images/skjain.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Director, SLIET
                                    </Typography>
                                    <Typography align={"justify"}>
                                        Dear Alumni,<br/>
                                        SLIET is an institution of academic excellence in India and has made significant
                                        contribution to society, in terms of producing numerous scholars, and
                                        intellectuals who are serving in India and Abroad. At the outset, I would like
                                        to extend hearty greetings to you all on my own behalf and on behalf of faculty,
                                        staff and students of SLIET.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.action}>
                                <Button size="small" color="primary" component={Link} to={'/message/director'}>
                                    View More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Card className={classes.card}>
                            <CardActionArea component={Link} to={'/message/dean-sw'}>
                                <CardMedia
                                    className={classes.media}
                                    image="https://www.slietalumni.com/images/dcs.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Dean (SW), SLIET
                                    </Typography>
                                    <Typography align={"justify"}>
                                        The publication solely meant for providing accountability of alumni funds,
                                        recognizing the donors and the alumni to be aware of the happening at the
                                        institute and get involved for the new ventures. <br/>
                                        The last few years was exciting with several new initiatives taken and ideas
                                        conceived being implemented. This time of reflection of what achieved in the
                                        last few year.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.action}>
                                <Button size="small" color="primary" component={Link} to={'/message/dean-sw'}>
                                    View More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Card className={classes.card}>
                            <CardActionArea component={Link} to={'/message/chairman'}>
                                <CardMedia
                                    className={classes.media}
                                    image="https://www.slietalumni.com/images/executive/sukhcharn.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent className={classes.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Chairman, SAA
                                    </Typography>
                                    <Typography align={"justify"}>
                                        I am writing to as the Chairman of SLIET Alumni Association discussing various
                                        improvements and challenges of your great Alma Mater.<br/>
                                        I congratulate the alumni and students who have come forward to help the
                                        Institute and the faculty who are relentlessly serving this great institution
                                        and helping sustain its high standards in education excellence.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.action}>
                                <Button size="small" color="primary" component={Link} to={'/message/chairman'}>
                                    View More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

AdvisoryCommittee.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvisoryCommittee);