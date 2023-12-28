import React from 'react'
import logo from '../../assets/logo.svg'
import './css/header.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import defoult_avatar from "../../assets/defoult_avatar.png"


const Header = () => {

    const name = useSelector((state) => state.auth.name)

    return(
        <>
        <header className='header'>
            <div className='logoContainer'>
                <img src={logo}></img>
                <p className='logoTitle'>Ladybug et Chat Noir</p>
            </div>
            <ul className='listLink'>
                <Link to='/'>Обсуждения</Link>
                <Link to='/news'>Новости</Link>
            </ul>
            <Link to='/profile'>
                <div className='userMiniProfile'>
                    <img className='headerAvatar' src={defoult_avatar}></img>
                    <p>{name}</p>
                </div>
            </Link>
        </header>
        </>
    )
}

export default Header
