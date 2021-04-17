import React from 'react';
import { getUserId, getUsername } from '../reducks/users/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../reducks/users/operations';


const Home = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state);
    const username = getUsername(selector)
    const uid = getUserId(selector);
    return(
        <div>
            <h2>HOME</h2>
            <p>{uid}</p>
            <p>{username}</p>
            <button onClick={() => dispatch(signOut())}>Sign Out</button>
        </div>
    )
}

export default Home;