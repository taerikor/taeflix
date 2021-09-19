
import React, { useEffect, useRef, useState } from 'react'
import  User  from '../components/User';
import './Auth.css'

interface AuthProps {
    USER_LS:string
    loginUser: () => void
}

const Auth = ({USER_LS,loginUser}:AuthProps) => {

    const [name,setName] = useState('')
    // const [items,setItems] = useState(localStorage.getItem(USERS_LS)?JSON.parse(localStorage.getItem(USERS_LS)):[])


        const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (name.length === 0){
                return;
            }
            // const newItem ={
            //     name,
            //     id: Date.now()
            // };
            // if (items !== []){
            //     localStorage.setItem(USERS_LS,JSON.stringify(items.concat(newItem)))
            // }
            // setItems(items.concat(newItem))
            localStorage.setItem(USER_LS, name)
            loginUser()
            setName('')
         }
        const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
            setName(e.target.value)   
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
            
            {
            //유저목록 
            /* <div className='profilebox'>
                <span className='title'>프로필 관리</span>
                <a onClick={onBtnBack}>Back</a>
            <div className='userbox'>
                </div>
            </div> */}
            {/* {items.map(item => (
                <User 
                key={item.id}
                id={item.id} 
                onBtnClick={onBtnDelete} 
                name={item.name}></User>))} */}
    </section>
        )
}

export default Auth