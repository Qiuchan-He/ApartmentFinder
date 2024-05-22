import React from 'react'
import LoginView from './LoginView'
import {useDispatch} from "react-redux"
import * as LoginActions from "../../redux/actions/login"

const Login = ()=>{

    const dispatch = useDispatch()

    function loginHandle(user){
        //写入redux
        dispatch(LoginActions.setLogin(user))
        //写入本地
        localStorage.setItem("goodlive",JSON.stringify(user))
        //回到上一级
        window.history.back()
    }

    return(
        <div>
            <LoginView onLoginEvent={loginHandle}/>
        </div>
    )
}

export default Login