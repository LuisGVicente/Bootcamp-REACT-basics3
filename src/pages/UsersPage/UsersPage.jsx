import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../shared/data/users';

export default function UsersPage(){

    return (
        <ul>
            {users.map((user,index) => <li key={index}><Link to={'users/' + user.id}>{user.name}</Link></li>)}
        </ul>
    )
}