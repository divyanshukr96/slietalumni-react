import React, {Component} from 'react';
import {NavLink, Link} from "react-router-dom";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";

import {withStyles} from "@material-ui/core/es";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {isEmpty} from "lodash";
import SAALogo from './SAA-logo-color.png';

// import {login} from "../../actions/authActions";
// import PasswordReset from "./PasswordReset";

const styles = theme => ({
    paper: {
        margin: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
    forgot: {
        marginTop: theme.spacing.unit,
        textAlign: 'right',
        '& a':{
            textDecoration: 'none',
            color: '#2196f3',
        }
    },
});

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            errors: {},
        };
        this.handleChange = this.handleChange.bind(this);
        this.passwordReset = this.passwordReset.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {formData} = this.state;
        this.setState({
            formData: {
                ...formData,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({submitted: true});
        this.props.login(this.state.formData).then(
            res => {
                return res.errors ? this.setState({
                    errors: res.errors.data,
                    submitted: false
                }) : !res.response ? this.setState({submitted: false}) : null;
            }
        )
    };

    passwordReset = () => {
        this.setState({resetForm: !this.state.resetForm})
    };

    render() {
        const {classes} = this.props;
        const {formData, errors, resetForm} = this.state;
        return (
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" style={{textAlign: 'center'}}>
                    <img src={SAALogo} alt="techFest_logo" style={{height: 80}}/>
                </Typography>

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    className={classes.form}
                    instantValidate={false}
                >

                    <TextValidator
                        fullWidth
                        onChange={this.handleChange}
                        error={!isEmpty(errors.username)}
                        name="username"
                        id="username"
                        label="E-mail"
                        value={formData.username || ''}
                        helperText={errors.username}
                        margin="dense"
                        validators={['required', 'isEmail']}
                        errorMessages={['E-mail field is required.', 'Are you sure that you\'ve entered your email correctly?']}
                    />

                    <TextValidator
                        fullWidth
                        onChange={this.handleChange}
                        error={!isEmpty(errors.password)}
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        value={formData.password || ''}
                        helperText={errors.password}
                        margin="dense"
                        validators={['required', 'minStringLength:8']}
                        errorMessages={['Password field is required', 'Password length must be of 8 - 20 characters long.']}
                    />

                    <div className={classes.forgot}>
                        <NavLink to={'#'} className={classes.forgo1t} onClick={this.passwordReset}>
                            Forgot Password ?
                        </NavLink>
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={this.state.submitted}
                    >Sign in</Button>

                    <Button component={Link} to={'/register'} size="small" variant={"outlined"}>
                        Create Account
                    </Button>

                </ValidatorForm>
                {/*{resetForm && <PasswordReset open={this.passwordReset}/>}*/}
            </Paper>
        );
    }
}


LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LoginForm);