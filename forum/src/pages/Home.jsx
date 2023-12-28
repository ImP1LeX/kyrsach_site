import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Header from './elements/header'
import './css/Home.css'
import bg from "../assets/bg_main.png"
import Theme from './elements/theme'

const Home = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [data, setData] = useState({})
    const user_id = useSelector((state) => state.auth.user_id)
    useEffect(() =>{
        fetch('http://localhost:3000/themes')
            .then(res => res.json())
            .then(com => setData(com))
        },[])
    const sendData = (title, text, user_id) =>{
        const theme = {
            'title': title,
            'text': text,
            'user_id': user_id
        }
        fetch('http://localhost:3000/theme', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(theme)
        })
    }

    
    return (
        <>
            <Header/>
            <div className='bgStatic' style={{backgroundImage: `url(${bg})`}}/>
            <div className='mainContent'>
                <div className='formAddTheme'>
                    <p>Добавить обсуждение</p>
                    <label style={{width: '100%'}} title='Заголовок'>Заголовок<input value={title} className='themeAddInput' type='text' onChange={(e) => {
                        setTitle(e.target.value)
                    }}/></label>
                    <label style={{width: '100%'}} title='Текст'>Текст<input value={text} className='themeAddInput' type='text' onChange={(e) =>{
                        setText(e.target.value)
                    }}/></label>
                    <button className='themeAddInput' onClick={() => {
                        sendData(title, text, user_id)
                    }}>Создать</button>
                    {console.log(data.themes)}
                </div>
                
                {data?.themes?.map((data) => {
                    return(<Theme data ={data}/>)
                })}
            </div>
        </>
    )
}

export default Home