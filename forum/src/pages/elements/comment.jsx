import React, { useState } from 'react'

const Comment = (props) => {
    const {avatar, name, text, childrens} = props
    return(
        <>
            <div className='commentContainer'>
                <div className='imgContainer'>
                    <img className='themeAvatar' src={avatar}/>
                </div>
                <div className='comentContentConntainer'>
                    <p>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
            <div className='subCommentContainer'>
                {childrens?.map( (child) => {
                    return(<div className='commentContainer'>
                        <div className='imgContainer'>
                            <img className='themeAvatar' src={child.avatar}/>
                        </div>
                        <div className='comentContentConntainer'>
                            <p>{child.name}</p>
                            <p>{child.text}</p>
                        </div>
                    </div>)
                })}
            </div>
        </>
    )
}

export default Comment