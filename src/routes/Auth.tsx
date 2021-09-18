
import React, { useEffect, useRef, useState } from 'react'
import  User  from '../components/User';
import './Profile.css'

const USERS_LS = 'users'
const CLASS_HIDDEN = 'hidden'
const CURRENT_USER_LS = 'currentUser'

const Auth = () => {

    const [name,setName] = useState('')
    // const [items,setItems] = useState(localStorage.getItem(USERS_LS)?JSON.parse(localStorage.getItem(USERS_LS)):[])
    const inputBox = useRef()
    const UserBox = useRef()

        const onSubmit = () => {
            // e.preventDefault();
            // if (name.length === 0){
            //     return;
            // }
            // const newItem ={
            //     name:name,
            //     id: Date.now()
            // };
            // if (items !== []){
            //     localStorage.setItem(USERS_LS,JSON.stringify(items.concat(newItem)))
            // }
            // setItems(items.concat(newItem))
            // setName('')

            // history.push({
            //     pathname:'/browse',
            //     state:{name:newItem.name,id:newItem.id}
            // })
         }
        const onChange = () =>{
            // setName(e.target.value)   
            }

        const onBtnDelete = () => {
                // const cleanToDos = items.filter(function (toDo) {
                //     return toDo.id !== parseInt(e.target.parentNode.id);
                // });
                // localStorage.setItem(USERS_LS,JSON.stringify(cleanToDos))
                // setItems(cleanToDos)
            }

            const onBtnBack = ()=>{
            }

        return(
            <section className='profile_container'>
            <div className='inputbox' >
            <span className='title'>프로필 추가</span>
            <span className='desc'>다른 사용자를 등록하시려면 프로필을 추가하세요.</span>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='이름'
                value={name}
                onChange={onChange}/>
                <button>확인</button>
            </form>
            </div>
            <div className='profilebox'>
                <span className='title'>프로필 관리</span>
                    <button onClick={onBtnBack}>Back</button>
                <div className='userbox'>
            {/* {items.map(item => (
                <User 
                key={item.id}
                id={item.id} 
                onBtnClick={onBtnDelete} 
                name={item.name}></User>))} */}
                </div>
            </div>
    </section>
        )
}

export default Auth