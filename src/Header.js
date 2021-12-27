import React from 'react'; 
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton><MenuIcon/></IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"></img>
            </div>
            <div className="header_middle">
            <SearchIcon/>
            <input placeholder='Search email' type ='text'/>
           <ArrowDropDownIcon className="header_inputCaret"/>
            </div>
           

            <div className="header_right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
