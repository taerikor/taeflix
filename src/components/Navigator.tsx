import React from 'react'
import { Link } from 'react-router-dom'
import './Navigator.css'

interface NavigatorProps {
    userName: string; 
    loginUser: () => void;
    USER_LS: string 
}

const Navigator = ({userName, loginUser, USER_LS}:NavigatorProps) => {
    
        const onClick = () => {
            localStorage.removeItem(USER_LS)
            loginUser()
        }

          return( 
              <div className='navbar'>
                <div className='logo'>TAEFLIX</div>
                <Link to='/'>Home</Link>
                <Link to='/mylist'>My List</Link>
                <div className='user_info'>
                <span className='name'>{userName}</span>
                <button onClick={onClick}>ｘ</button>
                </div>
                </div>
          )
}

export default Navigator