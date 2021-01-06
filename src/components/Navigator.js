import React from 'react'
import { Link } from 'react-router-dom'
import './Navigator.css'

const CURRENT_USER_LS = 'currentUser'

class Navigator extends React.Component{
    constructor(props){
        super(props)
        const { location } = this.props;
        if(location.state){
            localStorage.setItem(CURRENT_USER_LS,location.state.name)
        }
    }
    render(){
        const onClick = () => {
            localStorage.removeItem(CURRENT_USER_LS)
            this.props.history.push('/')
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
}

export default Navigator