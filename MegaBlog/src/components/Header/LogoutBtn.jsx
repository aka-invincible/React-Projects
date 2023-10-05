import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => { // logout karo using authService
            dispatch(logout()) // update karo store mei logout ho chuka using authSlice
        })
    }
  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2  duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn
