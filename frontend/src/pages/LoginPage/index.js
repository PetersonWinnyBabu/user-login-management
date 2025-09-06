import LoginForm from "../../components/Login"
import './index.css'


const LoginPage = () => {
    return <div className = "login-background-container">
        <h1 className="heading">User Login</h1>
        <LoginForm/>
    </div>
}

export default LoginPage