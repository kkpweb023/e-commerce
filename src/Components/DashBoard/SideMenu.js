import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {
    return (
            <div className='Side_Content_div'>

                <div className='weather'>
                    <Link to={"/myAccount/dashboard/profile"} className="a"><i className="bi bi-person-circle"></i> Profile</Link>
                </div>

                <div className='tablePagi'>
                    <Link to={"/myAccount/dashboard/address"} className="a"><i className="bi bi-house-door"></i> Address</Link>
                </div>

                <div className='crud'>
                    <Link to={"/myAccount/dashboard/account"} className="a"><i className="bi bi-person-fill"></i> Account</Link>
                </div>

            </div>

    )
}

export default SideMenu