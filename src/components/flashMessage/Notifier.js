import {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withSnackbar} from "notistack";
import {removeFlashMessage} from "../../actions/flashMessageActions";


class Notifier extends Component {
    state = {
        displayed: [],
    };

    storeDisplayed = (key) => {
        this.setState(({ displayed }) => ({
            displayed: [...displayed, key],
        }));
    };

    render() {
        const { notifications, enqueueSnackbar, removeFlashMessage } = this.props;
        const { displayed } = this.state;

        notifications.forEach((notification) => {
            setTimeout(() => {
                // If notification already displayed, abort
                if (displayed.indexOf(notification.key) > -1) return;
                // Display notification using notistack
                enqueueSnackbar(notification.message, notification.options);
                // Add notification's key to the local state
                this.storeDisplayed(notification.key);
                // Dispatch action to remove the notification from the redux store
                removeFlashMessage(notification.key);
            }, 10);
        });

        return null;
    }
}

const mapStateToProps = store => ({
    notifications: store.flashMessage.notifications,
});

const mapDispatchToProps = dispatch => bindActionCreators({ removeFlashMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Notifier));