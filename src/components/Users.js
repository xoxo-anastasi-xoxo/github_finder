import React from 'react';
import {UserItem} from './UserItem';

const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
};

export const Users = ({users}) => (
    <div style={usersStyle}>
        {users.map(({id, ...rest}) => <UserItem key={id} {...rest}/>)}
    </div>
);