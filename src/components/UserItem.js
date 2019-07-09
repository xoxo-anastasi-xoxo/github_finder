import React from 'react';

export const UserItem = (
    {
        login = 'mojombo',
        avatar_url = 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url = 'https://github.com/mojombo',
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
            <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
        </div>
    </div>
);