import React from 'react';
import { Link } from 'react-router-dom';

export class User extends React.Component {
    render(){
    return (
        <div id={this.props.id}>
            <Link to={{
                pathname:'/browse',
                state:{
                    name:this.props.name,
                    id:this.props.id
                }
            }}>
            <div>
            <span>{this.props.name}</span>
            </div>
            </Link> 
            <button onClick={this.props.onBtnClick}>삭제</button>
        </div>
    )
    }
}