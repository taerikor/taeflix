import React from 'react'
import { Link } from 'react-router-dom'

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
              <>
          <Link to='/browse'>Home</Link>
          <Link to='/browse/genre'>Genre</Link>
          <Link to='/browse/mylist'>My List</Link>
          <span>{name}</span>
          <span onClick={onClick}>OUT</span>
          </>
          )
    }
}

export default Navigator