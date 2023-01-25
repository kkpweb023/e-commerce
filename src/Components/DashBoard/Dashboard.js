import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
            <div className='Content_div'>

                <div className='weather'>
                    <Link to={"profile"} className="a"><i className="bi bi-person-circle"></i> Profile</Link>
                </div>

                <div className='tablePagi'>
                    <Link to={"address"} className="a"><i className="bi bi-house-door"></i> Address</Link>
                </div>

                <div className='crud'>
                    <Link to={"account"} className="a"><i className="bi bi-person-fill"></i> Account</Link>
                </div>
                
            </div>
    )
}
export default Dashboard; 