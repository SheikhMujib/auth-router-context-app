import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>Welcome to home. {user?.email} </h1>
        </div>
    );
};

export default Home;