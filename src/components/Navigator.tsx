import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import './Navigator.css'

interface NavigatorProps {
    userName: string; 
    loginUser: () => void;
    USER_LS: string 
}

const Navigator = ({userName, loginUser, USER_LS}:NavigatorProps) => {
        const history = useHistory()
        const onClick = () => {
            localStorage.removeItem(USER_LS)
            loginUser()
            history.push('/')
        }

          return( 
              <div className='navbar'>
                <div className='left'>
                <Link to='/'>Home</Link>
                <Link to='/mylist'>My List</Link>
                </div>
                <div className='user_info'>
                <span className='name'>{userName}</span>
                <button onClick={onClick}>ｘ</button>
                </div>
                </div>
          )
}

export default Navigator