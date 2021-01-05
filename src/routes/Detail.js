import React from 'react'
import './Detail.css'

const USERNAME = localStorage.getItem('currentUser')

class Detail extends React.Component {
    state={
        id:localStorage.getItem(USERNAME)?JSON.parse(localStorage.getItem(USERNAME)):[]
    }
    
    componentDidMount(){
        const {location,history}=this.props
        if(location.state === undefined){
            history.push('/browse')
        }
        console.log(this.state.id)
    }
    render(){
        const {location} = this.props
        const onClick = () => {
            const USERNAME = localStorage.getItem('currentUser')
            const newId = {
                id:location.state.id
            }
            localStorage.setItem(USERNAME,JSON.stringify(this.state.id.concat(newId)))
            this.setState(state => ({id:state.id.concat(newId)}))
        }
        if(location.state){
        return (
            <div>
                <img src={location.state.largeImage} alt={location.state.title}/>
                <div>
                <span>{location.state.title}</span>
                <span>{location.state.year}</span>
                <span>{location.state.runtime}</span>
                <span>{location.state.genres}</span>
                <span>{location.state.summary}</span>
                <button onClick={onClick}>My List</button>
                </div>
            </div>
        )
        }else {
            return null;
        }
    }
}

export default Detail;