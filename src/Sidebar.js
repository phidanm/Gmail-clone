import React from 'react'; 
import './sidebar.css';
import { Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon = {<AddIcon  fontSize='large'/>}
            className="sidebar_compose"
            >compose</Button>
            <SidebarOption Icon = {InboxIcon}  title="Inbox" number={54} selected ={true}/>
            <SidebarOption Icon ={StarIcon} title="Starred" number={4} />
            <SidebarOption Icon ={AccessTimeIcon} title="Snoozed" number={64} />
            <SidebarOption Icon ={LabelImportantIcon} title="Important" number={20} />
            <SidebarOption Icon ={SendIcon} title="Sent" number={41} />
        </div>
    )
}

export default Sidebar
