import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 20,
        marginRight: -12,
    },
    icon: {
        margin: 'auto 5px auto auto'
    },


    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

});


class AuthNavbar extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scroll: 0,
            scrollUp: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scrollUp: window.scrollY > this.state.scroll,
            scroll: window.scrollY,
        });
        console.log(this.state.scrollUp)
    };



    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="default" >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Dashboard
                        </Typography>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <Button component={NavLink} to={"/"} color="inherit" >Home</Button>
                            <Button component={NavLink} to={"/prefest-event"} color="inherit" >Pre-fest Event</Button>
                            <Button component={NavLink} to={"/events"} color="inherit">Event</Button>
                            <Button component={NavLink} to={"/profile"} color="inherit">Profile</Button>
                            <Button component={NavLink} to={"/logout"} color="inherit">Logout</Button>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                onClick={this.props.toggleDrawer}
                                className={classes.menuButton}
                                color="inherit" aria-label="Open drawer">
                                <MenuIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

AuthNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthNavbar);