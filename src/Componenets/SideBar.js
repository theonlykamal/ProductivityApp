import React from 'react'
import './Mycss.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ChatItems from './ChatItems';
import { IconButton } from '@mui/material';
export default function SideBar() {
  return (
    <div className='sidebar-container'>
      <div className = 'sb-header'>
        <div>
        <IconButton>
        <AccountCircleIcon /> 
        </IconButton> 
        </div>
        <div>
        <IconButton>
        <PersonAddAlt1Icon />
        </IconButton>
        <IconButton>
        <GroupAddIcon />
        </IconButton>
        <IconButton>
        <NightlightIcon />
        </IconButton>
        </div>
      </div>
      <div className = 'search'> 
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input placeholder='search' className = 'search-box'></input>
      </div>
      <div className = 'chats'> 
      <ChatItems />
      </div>
    </div>
  )
}
