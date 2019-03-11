import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import isEmpty from "lodash/isEmpty";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 60,
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.unit * 3,
        },
    },
    content: {
        paddingBottom: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit,
    },
});

class Academic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                registration_no: "123456",
                passing_year: 2012,
                admission_year: 1998,
                branch: "cse",
            },
            errors: {},
            open: true,
            form: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.props.addData(this.state.formData);
        if (errors) this.setState({errors});
    };

    render() {
        const {classes, close} = this.props;
        const {open, errors, formData} = this.state;
        return (
            <Dialog
                open={open}
                onClose={close}
                aria-labelledby="academic-detail"
                disableBackdropClick
            >
                <DialogTitle id="academic-detail-title">Academic details</DialogTitle>
                <DialogContent className={classes.content}>
                    <ValidatorForm
                        ref="password"
                        onSubmit={this.handleSubmit}
                        className={classes.form}
                        instantValidate={false}
                    >

                        <TextValidator
                            fullWidth
                            onChange={this.handleChange}
                            error={!isEmpty(errors.branch)}
                            name="branch"
                            id="branch"
                            label="Branch"
                            value={formData.branch || ''}
                            helperText={errors.branch}
                            margin="dense"
                        />
                        <TextValidator
                            fullWidth
                            onChange={this.handleChange}
                            error={!isEmpty(errors.admission_year)}
                            name="admission_year"
                            id="admission_year"
                            label="admission_year"
                            value={formData.admission_year || ''}
                            helperText={errors.admission_year}
                            margin="dense"
                        />
                        <TextValidator
                            fullWidth
                            onChange={this.handleChange}
                            error={!isEmpty(errors.passing_year)}
                            name="passing_year"
                            id="passing_year"
                            label="passing_year"
                            value={formData.passing_year || ''}
                            helperText={errors.passing_year}
                            margin="dense"
                        />
                        <TextValidator
                            fullWidth
                            onChange={this.handleChange}
                            error={!isEmpty(errors.registration_no)}
                            name="registration_no"
                            id="registration_no"
                            label="registration_no"
                            value={formData.registration_no || ''}
                            helperText={errors.registration_no}
                            margin="dense"
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add
                        </Button>

                    </ValidatorForm>
                </DialogContent>
                <DialogActions>
                    <Button onClick={close} size={"small"}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

Academic.propTypes = {
    classes: PropTypes.object.isRequired,
    addData: PropTypes.func,
    close: PropTypes.func,
};

export default withStyles(styles)(Academic);