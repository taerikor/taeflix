import React, { useEffect, useState } from 'react'
import './Detail.css'


const Detail = () => {
   
    // const USERNAME = localStorage.getItem('currentUser')
    // console.log(USERNAME)
    // // const [id,setId] = useState(localStorage.getItem(USERNAME)?JSON.parse(localStorage.getItem(USERNAME)):[])


    // // useEffect(()=>{
    // //     if(location.state === undefined){
    // //         history.push('/browse')
    // //     }

    // // },[])

    // // useEffect(()=> {
    // //     const USERNAME = localStorage.getItem('currentUser')
    // //     localStorage.setItem(USERNAME,JSON.stringify(id))
    // // })


    //     const onClick = () => {
    //         // const newId = {
    //         //     id:location.state.id
    //         // }
    //         // setId(id.concat(newId))
    //     }
    //     const onExitBtnClick = () => {
    //         history.push('/browse')
    //     }
    //     if(location.state){
    //     return (
    //         <div className='detailbox'>
    //             <div className='imgbox'>
    //             <img src={location.state.largeImage} alt={location.state.title}/>
    //             </div>
    //             <div className='detail_info'>
    //                 <div className='btnbox'><button onClick={onExitBtnClick}>X</button></div>
    //             <span className='title'>{location.state.title}</span>
    //             <div className='detail_infobox'>
    //             <span className='detail_year'>{location.state.year}</span>
    //             <span className='detail_runtime'>{`${location.state.runtime}m`}</span>
    //             <button onClick={onClick}>+ My List</button>
    //             </div>
    //             <ul className='genre'>
    //                 {/* {location.state.genres.map((genre,index)=> (<li key={index}>{genre}</li>))} */}
    //                 </ul>
    //             <span className='summary'>{location.state.summary}</span>
    //             </div>
    //         </div>
    //     )
    //     }else {
    //         return null;
    //     }
    return <div>Detail</div>
}

export default Detail;