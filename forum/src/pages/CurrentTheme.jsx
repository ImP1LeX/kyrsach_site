import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Header from './elements/header'
import './css/CurrentTheme.css'
import bg from "../assets/bg_main.png"
import { useParams } from 'react-router-dom'
import logo from '../assets/logo.svg'
import likeActive from '../assets/ico/heart.svg'
import likeNoActive from '../assets/ico/favorite_border.svg'
import comment from '../assets/ico/comment.svg'
import Comment from './elements/comment'
import defoult_avatar from "../assets/defoult_avatar.png"

const CurrentTheme = () => {
    const {id} = useParams();
    const [data, setData] = useState({})
    const [data1, setData1] = useState({})
    const [text, setText] = useState('')


    useEffect(()=>{
        fetch(`http://localhost:3000/theme/${id}`)
        .then(res => res.json())
        .then(com => setData(com))
    },[id])
    {if (data != {}){
        useEffect(()=>{
            fetch(`http://localhost:3000/comments/${id}`)
            .then(res => res.json())
            .then(com => setData1(com))
        },[])
    } }
    
    const sendComments = (text) => {
        if (text != ''){
            text = {'text': text}
            fetch(`http://localhost:3000/theme/${id}/comment/${data?.user?.id}`, {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(text)
        })
        }

    }
    

    return (
        <>
            <Header/>
            <div className='bgStatic' style={{backgroundImage: `url(${bg})`}}/>
            <div className='mainContent'>
                <div className='themeConteiner' style={{alignItems: 'center'}}>
                    <p className='themeTitle'>{data?.theme?.title}</p>
                </div>
                <div className='themeMainContainer'>
                    <div className='userMiniProfile'>
                        <img className='themeAvatar' src={defoult_avatar}/>
                        <p>{data?.user?.name}</p>
                    </div>
                    <div className='mainTextContainer'>
                        <p>{data?.theme?.text}
                        </p>
                    </div>
                    <div className='themeCommentAddContainer'>
                        <input className='commentAddInput' value={text} onChange={(e)=>{setText(e.target.value)}}></input>
                        <button className='commentAddButton'onClick={()=>{
                            sendComments(text)
                        }} >Отправить</button>
                    </div>
                    {console.log(data1?.arr?.[0])}
                    {
                        data1?.arr?.[0]?.map((elem)=>{
                        return(<Comment avatar = {defoult_avatar} name = {elem.name} text = {elem.text} />)
                    })}


                </div>
            </div>
        </>
    )
}

export default CurrentTheme