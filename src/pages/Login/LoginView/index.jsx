import React, {useState} from 'react'
import api from "../../../api"
import validatorInput from "../../../utils/validator.js"
import classnames from 'classnames'
import './style.less'


const LoginView = (props)=>{

    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})


    function onSumbitHandle(e){
        e.preventDefault();

        var {isValid, errors} = validatorInput({
            username,
            password
        })

        if(!isValid){
            api.login({
                username,
                password
            }).then(res=>{
                if(res.data.status === 200){
                    setErrors({})
                    props.onLoginEvent(res.data);
                }else
                    console.log("登陆失败")
            })
        }else{
            setErrors(errors)
        }
}

       

    function changeHandle(e){
        if(e.target.name === "username"){
            setUsername(e.target.value)
        }
        if(e.target.name === "password"){
            setPassword(e.target.value)
        }
        
    }


    return(
        <div id="login-container">
            <form  onSubmit={onSumbitHandle}>
                <div className={classnames('input-container phone-container',{'input-container-error': errors.username})} >
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="username"
                        onChange={changeHandle}
                    />
                </div>
                <div className={classnames('input-container password-container',{'input-container-error':errors.password})}>
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        placeholder="输入验证码"
                        onChange={changeHandle}
                    />
                </div>
                <button className="btn-login" >登录</button>
            </form>
        </div>
    )
}

export default LoginView