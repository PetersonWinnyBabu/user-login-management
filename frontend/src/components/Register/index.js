import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import './index.css'


const RegisterForm = () => {
    const [emailAddress,setemailAddress] = useState('')
    const [password,setpassword] = useState('')
    const [emailError,setEmailError] = useState(false)
    const [responseMessage,setresponseMessage] = useState('')
    const [showPassword,setshowPassword] = useState(false)
    const [showPasswordError,setshowPasswordError] = useState(false)
    const [showMsg,setshowMsg] = useState(false)
    const navigate = useNavigate()


    const OnFormSubmit = (event) => {
        event.preventDefault()
        if (emailAddress !== ""  && password !== ""){
            const body = {
                "email_address": emailAddress,
                "password" : password
            }
            axios.post('http://localhost:5000/api/register-user',body)
            .then(response => {
                alert(response.data.message)
                navigate("/",{replace:true})
            })
            .catch(error => {
                setshowMsg(true)
                setresponseMessage(error.response.data.message)
                console.error('An Error Occured While Processing Your Request', error);
            });
            setemailAddress('')
            setpassword('')
        }
        else{
            setshowMsg(true)
            setresponseMessage('Please check Email and Password')
        }
        
    }

    const onBlurEmail = () => {
        if (!emailAddress.includes("@" || emailAddress === "")){
            setEmailError(true)
        }
        else{
            setEmailError(false)
        }
    }

    const onFocusEmail = () => {
        setshowMsg(false)
        setresponseMessage('')
        setEmailError(false)
    }

    const onBlurPassword = () => {
        if (password.length < 8  || password === ""){
            setshowPasswordError(true)
        }
        else{
            setshowPasswordError(false)
        }    
    }

    const onPasswordFocus = () => {
        setshowPasswordError(false)
    }




    const onChangeCheckBox = () => {
    if (showPassword){
        setshowPassword(false)
    }else{
        setshowPassword(true)
    }
}

    return <div className="register-form-card">
                <form className="register-form" onSubmit = {OnFormSubmit}>
                    <div className="input-container">
                        <label className="label" htmlFor = "emailInput">Email</label>
                        <input className="inputField" id = "emailInput" type = "text" value = {emailAddress} onChange = {(e) => {setemailAddress(e.target.value)}} onBlur = {onBlurEmail} onFocus = {onFocusEmail}/>
                        {emailError && <p className="response-msg">Please Check Email</p>}
                    </div>
                    <div className="input-container">
                        <label className="label" htmlFor = "passwordInput">Password</label>
                        <input className="inputField" id = "passwordInput" type = {showPassword ? "text" : "password"} value = {password} onChange = {(e) => {setpassword(e.target.value)}} onBlur = {onBlurPassword} onFocus = {onPasswordFocus}/>
                        {showPasswordError && <p className="response-msg">Password Cannot be Empty or less than 8 characters</p>}
                    </div>
                    <label className="label" htmlFor="check"><input id = "check" className="checkbox" type = "checkbox" onChange={onChangeCheckBox} /> Show Password</label>
                <button className="button-36" type="submit">Register</button>
                {showMsg && <p className="response-msg">{responseMessage}</p>}
            </form>
    </div>
}

export default RegisterForm