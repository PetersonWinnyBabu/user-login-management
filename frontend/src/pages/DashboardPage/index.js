import { useEffect, useState } from 'react'

import {useNavigate} from 'react-router-dom'

import axios from 'axios'

import Cookies from 'js-cookie'

import './index.css'

const DashboardPage = () => {
    const [user,setUser] = useState('')
    const navigate = useNavigate()
    const token = Cookies.get('jwt_token')
    
    
    useEffect(() => {   
        axios.get("http://localhost:5000/api/user", {
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
        .then(response => {
        setUser(response.data.user_email)
        console.log(response.data);
        })
        .catch(error => {
        console.error("Error fetching data:", error);
        });
    }, [token]); 

    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/',{replace:true})
    }


    return <div className="dashboard-background-container">
        <button className='button' type = "button" onClick = {onClickLogout}>Logout</button>
        <h1 className="heading">User DashBoard</h1>
        <p className='userdetails'>Email  :  {user}</p>

    </div>

}

export default DashboardPage
