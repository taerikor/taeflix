import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({id,name,onBtnClick}) => {
    return (
        <div className='user' id={id}>
            <Link to={{
                pathname:'/browse',
                state:{
                    name:name,
                    id:id
                }
            }}>
            <div>
            <span>{name}</span>
            </div>
            </Link> 
            <button onClick={onBtnClick}>ｘ</button>
        </div>
    )
}

export default User;