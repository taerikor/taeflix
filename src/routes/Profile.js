import React, { useEffect, useRef, useState } from 'react'
import  User  from '../components/User';
import './Profile.css'

const USERS_LS = 'users'
const CLASS_HIDDEN = 'hidden'
const CURRENT_USER_LS = 'currentUser'

const Profile = ({history}) => {

    const [name,setName] = useState('')
    const [items,setItems] = useState(localStorage.getItem(USERS_LS)?JSON.parse(localStorage.getItem(USERS_LS)):[])
    const inputBox = useRef()
    const UserBox = useRef()

    useEffect(()=>{
        console.log(inputBox, UserBox)
          if(items.length > 0){
          inputBox.current.classList.add(CLASS_HIDDEN)
          }
          if(items.length === 0){
              UserBox.current.classList.add(CLASS_HIDDEN)
          }
          if(localStorage.getItem(CURRENT_USER_LS)){
                history.push('/browse')
          }
      },[])
      useEffect(()=>{
          if(items.length === 0){
              inputBox.current.classList.remove(CLASS_HIDDEN)
              UserBox.current.classList.add(CLASS_HIDDEN)
              }
      })

        const onSubmit = e => {
            e.preventDefault();
            if (name.length === 0){
                return;
            }
            const newItem ={
                name:name,
                id: Date.now()
            };
            if (items !== []){
                localStorage.setItem(USERS_LS,JSON.stringify(items.concat(newItem)))
            }
            setItems(items.concat(newItem))
            setName('')

            history.push({
                pathname:'/browse',
                state:{name:newItem.name,id:newItem.id}
            })
         }
        const onChange = (e) =>{
            setName(e.target.value)   
            }
            const onBtnDelete = (e) => {
                const cleanToDos = items.filter(function (toDo) {
                    return toDo.id !== parseInt(e.target.parentNode.id);
                });
                localStorage.setItem(USERS_LS,JSON.stringify(cleanToDos))
                setItems(cleanToDos)
            }

            const onBtnBack = (e)=>{
                inputBox.current.classList.remove(CLASS_HIDDEN)
                e.target.classList.add(CLASS_HIDDEN)
            }

        return(
            <section className='profile_container'>
            <div className='inputbox' ref={inputBox}>
            <span className='title'>프로필 추가</span>
            <span className='desc'>다른 사용자를 등록하시려면 프로필을 추가하세요.</span>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='이름'
                value={name}
                onChange={onChange}/>
                <button>확인</button>
            </form>
            </div>
            <div className='profilebox' ref={UserBox}>
                <span className='title'>프로필 관리</span>
                    <button onClick={onBtnBack}>Back</button>
                <div className='userbox'>
            {items.map(item => (
                <User 
                key={item.id}
                id={item.id} 
                onBtnClick={onBtnDelete} 
                name={item.name}></User>))}
                </div>
            </div>
    </section>
        )
}

export default Profile