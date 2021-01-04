import React from 'react'
import { User } from '../components/User';
import './Profile.css'

const USERS_LS = 'users'
const CLASS_HIDDEN = 'hidden'
const CURRENT_USER_LS = 'currentUser'

class Profile extends React.Component {
    state={
        name:'',
        items:localStorage.getItem(USERS_LS)?JSON.parse(localStorage.getItem(USERS_LS)):[],
        inputBox:React.createRef(),
        UserBox:React.createRef()
    }
    componentDidMount() {
        if(this.state.items.length > 0){
        const inputBox = this.state.inputBox.current;
        inputBox.classList.add(CLASS_HIDDEN)
        }
        if(this.state.items.length === 0){
            const UserBox = this.state.UserBox.current
            UserBox.classList.add(CLASS_HIDDEN)
        }
        if(localStorage.getItem(CURRENT_USER_LS)){
            this.props.history.push('/browse')
        }
      }
      componentDidUpdate() {
        if(this.state.items.length === 0){
            const inputBox = this.state.inputBox.current;
            const UserBox = this.state.UserBox.current
            inputBox.classList.remove(CLASS_HIDDEN)
            UserBox.classList.add(CLASS_HIDDEN)
            }
      }
    render(){
        const onSubmit = e => {
            e.preventDefault();
            if (this.state.name.length === 0){
                return;
            }
            const newItem ={
                name:this.state.name,
                id: Date.now()
            };
            if (this.state.items !== []){
                localStorage.setItem(USERS_LS,JSON.stringify(this.state.items.concat(newItem)))
            }
            this.setState(state => ({
                items: state.items.concat(newItem),
                name:''
            }));
            this.props.history.push({
                pathname:'/browse',
                state:{name:newItem.name,id:newItem.id}
            })
         }
        const onChange = (e) =>{
            this.setState(
                {name:e.target.value})
                
            }
            const onBtnDelete = (e) => {
                const cleanToDos = this.state.items.filter(function (toDo) {
                    return toDo.id !== parseInt(e.target.parentNode.id);
                });
                localStorage.setItem(USERS_LS,JSON.stringify(cleanToDos))
                this.setState(state => ({
                    items: cleanToDos
                }));
            }
            const onBtnBack = (e)=>{
                const inputBox = this.state.inputBox.current;
                inputBox.classList.remove(CLASS_HIDDEN)
                e.target.classList.add(CLASS_HIDDEN)
            }
        return(
            <>
            <div className='inputbox' ref={this.state.inputBox}>
            <span>프로필을 작성하세요.</span>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='이름'
                value={this.state.name}
                onChange={onChange}/>
                <button>확인</button>
            </form>
            </div>
            <div className='profilebox' ref={this.state.UserBox}>
                <button onClick={onBtnBack}>Back</button>
            {this.state.items.map(item => (
          <User 
          key={item.id}
          id={item.id} 
          onBtnClick={onBtnDelete} 
          name={item.name}></User>))}
            </div>
    </>
        )
    }
}

export default Profile