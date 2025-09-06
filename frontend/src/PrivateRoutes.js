import Cookies from 'js-cookie'
import { Navigate, Outlet} from 'react-router-dom'

const PrivateRoutes = () => {
    const jwt_token = Cookies.get('jwt_token')
    if(jwt_token === undefined){
        return <Navigate to = "/" />
    }
    return  <Outlet/>
}

export default PrivateRoutes