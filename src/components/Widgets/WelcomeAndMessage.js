import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";

const styles = theme => ({
    welcome: {
        padding: theme.spacing.unit,
    },
    media: {
        display: 'flex',
        justifyContent: 'end',
        padding: theme.spacing.unit / 2,
    },
    cover: {
        width: 60,
        height: 60,
        borderRadius: '50%',
    },
    message: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        wordWrap: 'break-word',
        maxHeight: '3.8rem',
    }
});

class WelcomeAndMessage extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={8} style={{marginBottom: 8}}>
                <Grid item lg={5}>
                    <Paper className={classes.welcome}>
                        <Typography variant={"h6"}>
                            Welcome to SLIET Alumni Association (SAA)
                        </Typography>
                        <Typography align={"justify"}>
                            Founded in 2017, SAA is registered under Societies Registration Act (XXI of 1860) and as
                            amended by Punjab Amendment Act, 1957. The primary mission of SAA is to make fruitful
                            gap between Alumni and its Alma Mater along with Students of SLIET. We hope you have a
                            great experience visiting our website and to learn to about various facilities, benefits
                            and services you get to enjoy as a registered member.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item lg={7}>
                    <Grid container spacing={8}>
                        {/*Director Message*/}
                        <Grid item md={4} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea component={"div"}>
                                    <div className={classes.media}>
                                        <CardMedia
                                            className={classes.cover}
                                            image="https://www.slietalumni.com/images/skjain.jpg"
                                            title="Director, SLIET"
                                        />
                                        <div style={{paddingLeft: 8}}>
                                            <Typography variant="h6">Director, SLIET</Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                Dr. SK Jain
                                            </Typography>
                                        </div>
                                    </div>
                                    <CardContent style={{padding: 8}}>
                                        <Typography className={classes.message}>
                                            Dear Alumni,
                                            SLIET is an institution of academic excellence in India and has made
                                            significant contribution to society, in terms of producing numerous
                                            scholars, and intellectuals who are serving in India and Abroad.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        {/*President message*/}
                        <Grid item md={4} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea component={"div"}>
                                    <div className={classes.media}>
                                        <CardMedia
                                            className={classes.cover}
                                            image="https://www.slietalumni.com/images/skjain.jpg"
                                            title="President, SAA"
                                        />
                                        <div style={{paddingLeft: 8}}>
                                            <Typography variant="h6">President, SAA</Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                Mr. Winnerjit Singh
                                            </Typography>
                                        </div>
                                    </div>
                                    <CardContent style={{padding: 8}}>
                                        <Typography className={classes.message}>
                                            Dear Alumni,
                                            At SLIET, fall is all about new beginnings. A new academic year
                                            brings new students, new classes and a fresh slate of plans for the
                                            year ahead. I consider it an honor to be the president of the alumni
                                            association, as the alumni association is very special to me, having
                                            had a very long association with it and holding diverse positions in
                                            it over the last 2 years.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        {/*Chairman Message*/}
                        <Grid item md={4} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea component={"div"}>
                                    <div className={classes.media}>
                                        <CardMedia
                                            className={classes.cover}
                                            image="https://www.slietalumni.com/images/skjain.jpg"
                                            title="Chairman, SAA"
                                        />
                                        <div style={{paddingLeft: 8}}>
                                            <Typography variant="h6">Chairman, SAA</Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                Dr. Sukhcharan Singh
                                            </Typography>
                                        </div>
                                    </div>
                                    <CardContent style={{padding: 8}}>
                                        <Typography className={classes.message}>
                                            I am writing to as the Chairman of SLIET Alumni Association
                                            discussing various improvements and challenges of your great Alma
                                            Mater.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

WelcomeAndMessage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeAndMessage);