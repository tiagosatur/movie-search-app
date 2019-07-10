import React from 'react';
import { useSelector } from 'react-redux';


const Dashboard = () => {
    const {
        user: {
          user
        },
    } = useSelector(state => state);

    return(
        <div>
        <h2>Dashboard</h2>
        <p>
            Seja bem vindo 
            <strong> { user.username} </strong>!
        </p>
    </div>
    )
}

export default Dashboard;