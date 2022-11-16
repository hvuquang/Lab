import React from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import './Header.css'

export default function Header() {
  return (
    <div className='header__container'>
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
        <img className='header__logo' src="../logo192.png" alt="header" />
        <IconButton>
            <ForumIcon fontSize="large" className='header__icon' />
        </IconButton>
    </div>
  )
}
