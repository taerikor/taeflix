import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigator.css'

const CURRENT_USER_LS = 'currentUser'


const Navigator = ({location,history}) => {

    useState(()=>{
        if(location.state){
            localStorage.setItem(CURRENT_USER_LS,location.state.name)
        }
    },[])
        const onClick = () => {
            localStorage.removeItem(CURRENT_USER_LS)
            history.push('/')
        }

        const name = localStorage.getItem(CURRENT_USER_LS)
          return( 
              <div className='navbar'>
                <div className='logo'>TAEFLIX</div>
                <Link to='/browse'>Home</Link>
                <Link to='/browse/mylist'>My List</Link>
                <div className='user_info'>
                <span className='name'>{name}</span>
                <button onClick={onClick}>ｘ</button>
                </div>
                </div>
          )
}

export default Navigator