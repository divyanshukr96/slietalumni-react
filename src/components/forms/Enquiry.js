import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button/Button";
import {isEmpty} from "lodash";

const styles = theme => ({
    main: {
        maxWidth: 600,
        margin: 'auto',
    },
    form: {
        padding: theme.spacing.unit * 2
    },
    submit:{
        marginTop: theme.spacing.unit,
    }
});

class Enquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            errors: {},
            submitted: false,
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            ...this.state,
            formData:{
                [name]: value
            }
        })
    };

    render() {
        const {classes} = this.props;
        const {formData, errors, submitted} = this.state;
        return (
            <Paper className={classes.main}>
                <Typography variant={"h5"} component={Paper} style={{padding: 4}} >
                    Message / Enquiry
                </Typography>

                <ValidatorForm
                    ref="form"
                    className={classes.form}
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >

                    <TextValidator
                        fullWidth
                        onChange={this.handleChange}
                        error={!isEmpty(errors.name)}
                        name="name"
                        id="name"
                        label="Your Full Name"
                        value={formData.name || ''}
                        helperText={errors.name}
                        margin="dense"
                        validators={["required", "matchRegexp:^[.\\'\\-a-zA-Z ]+$"]}
                        errorMessages={[
                            "Name field is required.",
                            "Are you sure that you've entered your name correctly?"
                        ]}
                    />
                    <TextValidator
                        fullWidth
                        onChange={this.handleChange}
                        error={!isEmpty(errors.email)}
                        name="email"
                        id="email"
                        label="Your e-mail"
                        value={formData.email || ''}
                        helperText={errors.email}
                        margin="dense"
                        validators={["required", "isEmail"]}
                        errorMessages={[
                            "Email field is required.",
                            "email is not valid"
                        ]}
                    />
                    <TextValidator
                        fullWidth
                        onChange={this.handleChange}
                        error={!isEmpty(errors.mobile)}
                        name="mobile"
                        id="mobile"
                        label="Contact Number"
                        value={formData.mobile || ''}
                        helperText={errors.mobile}
                        margin="dense"
                        validators={["required", "isEmail"]}
                        errorMessages={[
                            "Contact field is required.",
                            "email is not valid"
                        ]}
                    />

                    <TextValidator
                        fullWidth
                        onChange={this.handleChange}
                        error={!isEmpty(errors.subject)}
                        name="subject"
                        id="subject"
                        label="Subject"
                        value={formData.subject || ''}
                        helperText={errors.subject}
                        margin="dense"
                        validators={["required"]}
                        errorMessages={[
                            "Subject field is required.",
                        ]}
                    />

                    <TextValidator
                        fullWidth
                        onChange={this.handleChange}
                        error={!isEmpty(errors.message)}
                        multiline
                        name="message"
                        id="message"
                        label="Message"
                        value={formData.message || ''}
                        helperText={errors.message}
                        margin="dense"
                        validators={["required"]}
                        errorMessages={[
                            "Message field is required.",
                        ]}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={submitted}
                    >Submit</Button>
                </ValidatorForm>

            </Paper>
        );
    }
}

Enquiry.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Enquiry);