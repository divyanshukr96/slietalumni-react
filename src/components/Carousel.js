import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import classNames from 'classnames';

const styles = theme => ({
    main:{
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto',
    },
    slider:{
        [theme.breakpoints.down('sm')]:{
            maxHeight: 250,
            transition: 'height 1s',
        }
    }
});

const content = [
    {
        title: 'Vulputate Mollis Ultricies',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        button: 'Read More',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        user: 'Daniel',
        userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
    },
    {
        title: 'Tortor Dapibus',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
        button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'Samantha',
        userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
        button: 'Buy now',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        user: 'Michael',
        userProfile: 'https://s7.postimg.cc/6exjimijv/3_3x.png',
    },
    {
        title: 'Ultricies Vulputate Mollis',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        user: 'Jessica',
        userProfile: 'https://s7.postimg.cc/7ihnu80ij/4_3x.png',
    },
    {
        title: 'Odo Aenean Quam Tortor',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'William',
        userProfile: 'https://s7.postimg.cc/f9ydt4zmj/2_3x.png',
    },
    {
        title: 'Volutpat Aenean metus',
        description:
            'quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis.',
        button: 'Buy now',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        user: 'Katerina',
        userProfile: 'https://s7.postimg.cc/hsk2th5tn/6_3x.png',
    },
];

class Carousel extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main}>
                <Slider autoplay={3000} className={classNames('slider',classes.slider)} slideIndex={1}>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: `url('${item.image}') no-repeat center center`,
                                backgroundSize: 'cover'
                            }}
                        >
                            <div className="center">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <button>{item.button}</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

Carousel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Carousel);