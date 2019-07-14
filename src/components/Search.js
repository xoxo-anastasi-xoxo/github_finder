import React, {Component} from 'react';

export class Search extends Component {
    state = {
        text: ''
    };

    onSubmit = e => {
        e.preventDefault();
        const {text} = this.state;
        if (text) {
            this.props.callAlert('', '');
            this.props.searchUsers(this.state.text);
            this.setState({
                text: '',
                loading: false,
            })
        } else {
            this.props.callAlert('light', 'Input is clear!');
        }
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        const {shouldShowClearButton, clearUsers} = this.props;
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder='Search users...' value={this.state.text} onChange={this.onChange}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                    {shouldShowClearButton && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
                </form>
            </div>
        )
    }
}