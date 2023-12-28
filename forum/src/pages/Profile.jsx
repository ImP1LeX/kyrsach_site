import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { logOut } from '../redux/authSlice'
import Header from './elements/header'
import './css/Profile.css'
import bg from "../assets/bg_main.png"
import defoult_avatar from "../assets/defoult_avatar.png"



const Profile = () =>{

    const dispatch = useDispatch()
    const name = useSelector((state) => state.auth.name)

    return(<>
        <Header/>
            <div className='bgStatic' style={{backgroundImage: `url(${bg})`}}/>
            <div className='mainContent'>
                <div className='profileConteiner'>
                    <div className='profileAvatarConteiner'>
                        <img src={defoult_avatar}/>
                    </div>
                    <div className='prodileInfoContainer'>
                        <p>{name}</p>
                        <button className="buttonLogOut" onClick={() => {
                            dispatch(logOut())
                        }}>Выйти</button>
                    </div>
                </div>
            </div>
    </>)
}

export default Profile