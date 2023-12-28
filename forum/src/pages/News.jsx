import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Header from './elements/header'
import './css/News.css'
import bg from "../assets/bg_main.png"


const News = () => {

    return (
        <>
            <Header/>
            <div className='bgStatic' style={{backgroundImage: `url(${bg})`}}/>
            <div className='mainContent'>
                <div className='newsContainer'>
                    <div className='titleContainer'><h2>afjmpasfkp[ask</h2></div>
                    
                    <img className='newsImage' src='https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg'/>
                    <p>ashnpiaofjpaofjapofj</p>
                </div>
            </div>
        </>
    )
}

export default News