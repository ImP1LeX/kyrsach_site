import React, { useEffect, useState } from 'react'
import './css/theme.css'
import logo from '../../assets/logo.svg'
import likeActive from '../../assets/ico/heart.svg'
import likeNoActive from '../../assets/ico/favorite_border.svg'
import comment from '../../assets/ico/comment.svg'
import { Link, useParams } from 'react-router-dom'
import defoult_avatar from "../../assets/defoult_avatar.png"


const Theme = (props) => {
    
    const [data, setData] = useState({})
    const [like, setLike] = useState(false)
    useEffect(()=>{setData(props.data)},[props])
    
    return(
        <>
            <Link to={`/theme/${data?.id}`}>
                <div className='themeConteiner'>
                    <div className='infoColumn'>
                        <p className='themeTitle'>{data?.title}</p>
                    </div>
                    <div className='userMiniProfile'>
                        <img className='themeAvatar' src={defoult_avatar}></img>
                        <p>{data?.name}</p>
                    </div>
                </div>
            </Link>
        </>
    )

}

export default Theme