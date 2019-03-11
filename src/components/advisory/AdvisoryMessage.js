import React from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
    main: {
        maxWidth: theme.breakpoints.values.md,
        margin: 'auto',
        padding: theme.spacing.unit,
    },
    paper: {
        padding: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
    }
});

const message = {
    director: {
        title: "Director's Message",
        image: 'https://www.slietalumni.com/images/skjain.jpg',
        message: "Dear Alumni, \n SLIET is an institution of academic excellence in India and has made significant contribution to society, in terms of producing numerous scholars, and intellectuals who are serving in India and Abroad. At the outset, I would like to extend hearty greetings to you all on my own behalf and on behalf of faculty, staff and students of SLIET. The direct aim of an educational Institution is to transform the human material into an enlightened and liberated entity and make student a torchbearer of the values of rationality, truth, equality and equanimity. There are many ways that alumni can support and lead. For instance helping in getting internships, final placement, promoting executive educational programmes, giving opportunity for consultancy and impact networking to create brand value for the institute. \n" +
            "With the built environment facing serious challenges, there has never been a more important time to stay connected with other industry professional and keep abreast of industry development. Our interactive alumni association has been built with this in mind, and offers a wealth of benefits including an online networking community, career support service and networking social media events. \n" +
            "I hope you will find SLIET alumni association a valuable resource tool throughout a professional life and beyond, and enjoy the benefits that come with being part of SLIET community. I wish the association and its forth coming event all success and urge all concerned to scale greeter heights in future and take their rightful place in society, as we believe \"Together We Can Make A Difference\".",
        name: 'Dr. S. K. Jain,',
        designation: 'Director SLIET'
    },
    'dean-sw': {
        title: "Message from Dean (SW)",
        image: 'https://www.slietalumni.com/images/dcs.jpg',
        message: "The publication solely meant for providing accountability of alumni funds, recognizing the donors and the alumni to be aware of the happening at the institute and get involved for the new ventures. The last few years was exciting with several new initiatives taken and ideas conceived being implemented. This time of reflection of what achieved in the last few year. \n" +
            "We are committed to develop a strong relationship between the alumni and the university and to develop different platforms for achieving excellence at SLIET. \n" +
            "Over the years, the university has made phenomenal academic growth. The university alumni distinguished themselves through their commitment to their respective professions in a wide variety of discipline. The knowledge and the skills of the alumni can make a big difference in helping build a more vibrant SLIET. The association aims at better interaction between the alumni and students by providing forums and creating opportunities for such interaction. \n" +
            "The publication solely meant for providing accountability of alumni funds, recognizing the donors and the alumni to be aware of the happening at the institute and get involved for the new ventures. The last few years was exciting with several new initiatives taken and ideas conceived being implemented. This time of reflection of what achieved in the last few year. \n" +
            "We are grateful for your various support to many of our activities. Your support towards the creation of the alumni fund is beginning to help in many ways. We also look forward to your continued support in building a robust endowment, which is a hallmark of all great institution. We also seek your support to enhance SLIET. \n" +
            "The association also wishes to apprise, from time to time, the alumni with the academic and other activities of the university. The university welcomes suggestion from the alumni, for its academic growth.",
        name: 'Dr. D.C. Saxena,',
        designation: 'Dean (SW) SLIET'
    },
    chairman: {
        title: "Message from Chairman, SAA",
        image: 'https://www.slietalumni.com/images/executive/sukhcharn.jpg',
        message: "I am writing to as the Chairman of SLIET Alumni Association discussing various improvements and challenges of your great Alma Mater. \n" +
            "I congratulate the alumni and students who have come forward to help the Institute and the faculty who are relentlessly serving this great institution and helping sustain its high standards in education excellence. \n" +
            "This transformation would not be possible without the support of Alumni, Students, and Student Alumni Cell. \n" +
            "It has been an honor and a privilege to serve you all these years. I am very proud to be affiliated with the alumni and the young students turning into alumni with every passing year. I certainly have enjoyed meeting some of you along the way this year, and if we still have not met, I hope we will soon. You should always feel free to call or stop by if you would like to catch up. \n" +
            "When I recall my memories of those golden days at SLIET. I see you all cycling together on streets of the campus and roam with your hands on each other’s shoulders. Today embrace your Alma Mater in the same way and give back to the Institute to make its path towards excellence. This is one place where you grew up to face the world. We must do for our very own SLIET. \n",
        name: 'Dr. Sukhcharan Singh,',
        designation: 'Chairman SAA'
    }
};

const AdvisoryMessage = (props) => {
    const {classes, match} = props;
    const data = message[match.params.name];
    return (
        <div className={classes.main}>
            <Typography component={Paper} variant={"h6"} style={{padding: 8}}>
                {data.title}
            </Typography>
            <Paper className={classes.paper}>
                <img src={data.image} height={250} alt={data.title}/>
                <Typography variant={"body1"} style={{padding: 8}} component={'div'}>
                    {data.message.split("\n").map((message, index) => (
                        <p key={index}>{message}</p>
                    ))}
                    <span style={{fontWeight: 500}}>
                            {data.name}<br/>
                        {data.designation}
                        </span>
                </Typography>
            </Paper>
        </div>
    );
};

AdvisoryMessage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvisoryMessage);