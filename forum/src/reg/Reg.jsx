import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { regThunk } from '../redux/regSlice'
import { useNavigate } from 'react-router-dom'

const Reg = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const regState = useSelector((state) => state.reg)
    const dispatch = useDispatch()

    const nav = useNavigate()

    useEffect(() => {
        if (regState.message) {
            nav('/auth')
        }
    }, [regState])

    return (
        regState.error ? <p>{regState.error}</p> :
            regState.loading ? <p>Loading...</p> :
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    gap: '8px'
                }}>
                    <input value={username} onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="text" style={{
                        background: 'none',
                        border: '1px white solid'
                    }}/>
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="text" style={{
                        background: 'none',
                        border: '1px white solid'
                    }}/>
                    <button onClick={() => {
                        dispatch(regThunk({
                            username: username,
                            password: password
                        }))
                    }} style={{
                        background: 'none',
                        border: '1px white solid'
                    }}>Регистрация</button>
                </div>
    )
}

export default Reg