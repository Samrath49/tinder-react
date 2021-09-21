import React, { Component } from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import Logo from './img/tinder-logo.svg'

export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <IconButton>
                    <PersonIcon fontSize="large" className = "header__icon"/>
                </IconButton>
                <img className="header__logo" src={Logo} alt='Tinder' />
                <IconButton>
                    <ForumIcon fontSize='large' className='header__icon'/>
                </IconButton>
            </div>
        )
    } 
}

export default Header 