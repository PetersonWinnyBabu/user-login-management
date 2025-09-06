import {Route,Routes} from 'react-router-dom'

import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PrivateRoutes from './PrivateRoutes';




function App() {
  return (
<Routes>
    <Route path = "/" element = {<LoginPage/>} />
    <Route path = "/register-user" element = {<RegisterPage/>} />
  <Route element={<PrivateRoutes/>}>
    <Route path = "/user-dashboard" element = {<DashboardPage/>} />
  </Route> 
</Routes>
  );
}

export default App;

