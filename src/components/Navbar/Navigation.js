import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import {logout} from "../../actions/authActions";

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
        };
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const {isAuthenticated} = this.props.auth;

        const sideList = (
            <div style={{width: 250}}>
                <List>
                    <ListItem button component={Link} to={'/'} key={"techFEST'19"}>
                        <ListItemText primary={"techFEST'19"}/>
                    </ListItem>
                    <ListItem button component={Link} to={'/about'} key={'about'}>
                        <ListItemText primary={'About'}/>
                    </ListItem>
                    <ListItem button component={Link} to={'/events'} key={'events'}>
                        <ListItemText primary={'Events'}/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    {isAuthenticated ? (
                        <ListItem button key={'logout'} onClick={this.props.logout}>
                            <ListItemText primary={'Logout'}/>
                        </ListItem>
                    ) : (
                        <ListItem button component={Link} to={'/login'} key={'Login'}>
                            <ListItemText primary={'Login'}/>
                        </ListItem>
                    )}

                </List>
            </div>
        );

        return (
            <>
                <NavigationMenu
                    toggleDrawer={this.toggleDrawer('left', !this.state.left)}
                    isAuthenticated={isAuthenticated}
                    logout={this.props.logout}
                />
                <SwipeableDrawer
                    style={{zIndex: 1302}}
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object,
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps, {logout})(Navigation));