import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className='topbarContainer'>
       <div className="tobarLeft">
        <span className='logo'>tarek Social</span>
       </div>
       <div className="tobarCenter">
        <div className="searchbar">
           <SearchIcon className='searchIcon'/>
           <input type="text" className="searchInput" placeholder='Search For Friends ,Posts Or Videos'/>
        </div>
       </div>
       <div className="tobarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
               <PersonIcon/>
               <span className='topbarIconBadge'>1</span>
            </div>
            <div className="topbarIconItem">
               <ChatIcon/>
               <span className='topbarIconBadge'>2</span>
            </div>
            <div className="topbarIconItem">
               <NotificationsIcon/>
               <span className='topbarIconBadge'>1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt=""  className='topbarImg'/>
       </div>
    </div>
  )
}

export default Topbar