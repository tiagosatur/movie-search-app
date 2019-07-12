import React from 'react';
import { useSelector } from 'react-redux';


const Dashboard = (props) => {
    
    const {
        user: {
          user: { username },
          isLogged
        },
    } = useSelector(state => state);
    // console.log('DASHBOARD', isLogged);
    // if(!isLogged) return <h4>You must login to see this page...</h4>

    return(
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <p>
                Seja bem vindo 
                <strong> { username } </strong>!
            </p>
        </div>
    )
}

export default Dashboard;