import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/es/Typography/Typography";
import Divider from "@material-ui/core/es/Divider/Divider";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {isEmpty} from "lodash";
import Button from "@material-ui/core/Button/Button";
import Academic from "./Academic";
import axios from "axios";

const styles = theme => ({});

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                academic: [],
                registration_no: [],
                passing_year: [],
                admission_year: [],
                branch: []
            },
            user: {},
            errors: {},
            addAcademic: false,
        }
    }

    openAcademicDialog = () => (
        this.setState(state => ({addAcademic: !state.addAcademic}))
    );

    duplicateAcademic = (data, formData) => {
        let error = {};
        const registration = formData.registration_no.filter(e => e === data.registration_no)[0];
        if (registration) error['registration_no'] = 'This registration number already added';
        const admission = formData.admission_year.filter(e => e === data.admission_year)[0];
        if (admission) error['admission_year'] = 'This admission year already added';
        const passing = formData.passing_year.filter(e => e === data.passing_year)[0];
        if (passing) error['passing_year'] = 'This passing year already added';
        return isEmpty(error) ? null : error;
    };

    addAcademicData = (data) => {
        const {formData} = this.state;
        const error = this.duplicateAcademic(data, formData);
        if (error) return error;
        formData['registration_no'].push(data.registration_no);
        formData['passing_year'].push(data.passing_year);
        formData['admission_year'].push(data.admission_year);
        formData['branch'].push(data.branch);
        this.setState({
            ...this.state,
            formData,
            addAcademic: false,
        })
    };

    isUserRegistered = (e) => {
        e.preventDefault();
        axios.post("/api/register", this.state.formData).then(res => {
            console.log(res);
        }).catch(({response}) => {
            console.log(response.data)
        })
    };

    render() {
        const {classes} = this.props;
        const {formData, addAcademic, errors} = this.state;

        return (
            <div style={{maxWidth: 600, margin: "auto"}}>

                <ValidatorForm
                    ref="form"
                    onSubmit={this.isUserRegistered}
                    className={classes.form}
                    instantValidate={false}
                >
                    <Typography variant={"h6"} gutterBottom>Event Registration</Typography>
                    <Divider/>

                    <TextValidator
                        fullWidth
                        name="captain"
                        id="captain"
                        label="Name"
                        value={formData.name || ''}
                        // helperText="You are captain of this event"
                        margin="dense"
                    />
                    <TextValidator
                        fullWidth
                        name="captain"
                        id="captain"
                        label="Email"
                        value={formData.email || ''}
                        // helperText="You are captain of this event"
                        margin="dense"
                    />


                    <TextValidator
                        fullWidth
                        onChange={this.handleChange}
                        error={!isEmpty(errors.email)}
                        name="email"
                        id="email"
                        label="Team Member Email"
                        value={formData.email || ''}
                        helperText={errors.email}
                        margin="dense"

                    />

                    <div style={{textAlign: "right"}}>
                        <Button
                            onClick={this.isUserRegistered}
                            type="submit"
                            variant="contained"
                            color="inherit"
                            // disabled={submitted}
                        >Add Member</Button>
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        // onClick={this.handleRegister}
                    >Proceed Registration</Button>

                </ValidatorForm>

                <Button variant={"contained"} color={"inherit"} onClick={this.openAcademicDialog}>
                    hello
                </Button>

                {addAcademic && <Academic addData={this.addAcademicData.bind(this)} close={this.openAcademicDialog}/>}

            </div>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);