import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from "./association_logo.png";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    home: {
        textDecoration: 'none',
        lineHeight: 'initial',
    },
    menuButton: {
        marginLeft: 20,
        marginRight: -12
    },
    icon: {
        margin: "auto 5px auto auto"
    },

    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
});

class NavigationMenu extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scroll: 0,
            scrollUp: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scrollUp: window.scrollY > this.state.scroll,
            scroll: window.scrollY
        });
        // const {scrollUp, scroll} = this.state;
        // const nav = document.getElementById("navigation_menu");
        // if (scrollUp && scroll > 60) {
        //     nav.style.background = "#212121"
        // } else if (scroll <= 60) {
        //     nav.style.background = "transparent"
        // }
    };


    render() {
        const {classes, isAuthenticated, logout} = this.props;
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar id="navigation_menu" position="sticky"
                    className={"transparent"} style={{zIndex: 1301, marginBottom: 8}}>
                <Toolbar>
                    <Typography variant="h6" component={NavLink} to={'/'} color="inherit" noWrap
                                className={classes.home}>
                        <img src={Logo} alt="SLIET Alumni Association"/>
                    </Typography>

                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <Button component={NavLink} to={"/"} color="inherit">
                            Home
                        </Button>


                        <Button component={NavLink} to={"/about"} color="inherit">
                            About
                        </Button>

                        {/*<Button component={NavLink} to={"/prefest-event"} color="inherit">*/}
                        {/*Pre-fest*/}
                        {/*</Button>*/}

                        <Button component={NavLink} to={"/contact"} color="inherit">
                            Contact Us
                        </Button>


                        {isAuthenticated ? (
                            <>
                                <IconButton
                                    aria-owns={open ? 'auth-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={(e) => this.setState({anchorEl: e.currentTarget})}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="auth-menu"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    style={{zIndex: 1301}}
                                    open={open}
                                    onClose={() => this.setState({anchorEl: null})}
                                >
                                    <MenuItem
                                        component={NavLink}
                                        to={"/dashboard"}
                                        key="dashboard"
                                    >
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Button component={NavLink} to={"/login"} color="inherit">
                                Login
                            </Button>
                        )}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            onClick={this.props.toggleDrawer}
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                        >
                            <MenuIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

NavigationMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};


export default withStyles(styles)(NavigationMenu);
