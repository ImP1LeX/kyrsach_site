import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'

const MainPage = () => {

    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const role = useSelector((state) => state.auth.role)
    const name = useSelector((state) => state.auth.name)

    return (
        <>
            {
                role === "ADMIN" ? <p>УДАЛИТЬ ТОВАР</p> : <p>КУПИТЬ</p>
            }
            <p>{name}</p>
            <button onClick={() => {
                dispatch(logOut())
            }}>log out</button>
        </>
    )
}

export default MainPage