import React from 'react';
import {Switch, Route} from "react-router-dom";
import MessageTest from "../components/flashMessage/MessageTest";
import Navigation from "../components/Navbar/Navigation";
import Footer from "../components/Navbar/Footer";
import Home from "../components/Home";
import Events from "../components/event/Events";
import ContactUs from "../components/ContactUs";
import AdvisoryCommittee from "../components/advisory/AdvisoryCommittee";
import AdvisoryMessage from "../components/advisory/AdvisoryMessage";
import About from "../components/About";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const PublicRoutes = () => (
    <>
        <Navigation/>
        <div style={{minHeight: '69vh'}}>
            <Switch>
                <Route exact path={'/'} component={Home}/>

                <Route exact path={'/events'} component={Events}/>
                <Route exact path={'/contact'} component={ContactUs}/>
                <Route exact path={'/advisory-committee'} component={AdvisoryCommittee}/>
                <Route exact path={'/message/:name'} component={AdvisoryMessage}/>

                <Route exact path={'/about'} component={About}/>
                <Route exact path={'/register'} component={Register}/>
                <Route exact path={'/login'} component={Login}/>

                <Route path={`/test`} component={MessageTest}/>
            </Switch>
        </div>
        <Footer/>
    </>
);

export default PublicRoutes;