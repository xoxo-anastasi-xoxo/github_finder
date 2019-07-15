import React, {useState} from 'react';

export const Search = ({shouldShowClearButton, clearUsers, searchUsers, callAlert}) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        if (text) {
            callAlert('', '');
            searchUsers(text);
            setText('');
        } else {
            this.props.callAlert('light', 'Input is clear!');
        }
    };

    const onChange = e => {
        setText( e.target.value)
    };

    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type='text' name='text' placeholder='Search users...' value={text}
                       onChange={onChange}/>
                <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                {shouldShowClearButton &&
                <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
            </form>
        </div>
    )
}