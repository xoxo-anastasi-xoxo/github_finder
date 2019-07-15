import React from 'react';
import {Link} from 'react-router-dom';

export const UserItem = (
    {
        login = 'mojombo',
        avatar_url = 'https://avatars0.githubusercontent.com/u/1?v=4',
    }) => (
    <div className='card text-center'>
        <img
            src={avatar_url}
            alt={login}
            className='round-img'
            style={{width: '60px'}}
        />
        <h3>{login}</h3>
        <div>
            <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
        </div>
    </div>
);