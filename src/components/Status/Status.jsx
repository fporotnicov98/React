import React from 'react';
import style from './Status.module.scss';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }
    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <label onDoubleClick={this.activateEditMode}>Status: {this.props.status || '------'}</label>
                        : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />
                }
            </div>
        )
    }
};

export default Status;