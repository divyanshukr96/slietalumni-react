import React, {Fragment} from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button/Button";
import {addFlashMessage} from "../../actions/flashMessageActions";


const MessageTest = props => {
    const handleClick = () => {
        props.addFlashMessage({
            message: 'Failed fetching data.',
            options: {
                variant: 'warning',
            },
        });
    };

    return (
        <Fragment>
            <Button variant="contained" onClick={handleClick}>
                Display snackbar
            </Button>
        </Fragment>
    );
};


export default connect(null, {addFlashMessage})(MessageTest);