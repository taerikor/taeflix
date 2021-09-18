import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css'


const Movie = () => {
    // const onMouseOut = (e) => {
    //     const info = e.target.nextSibling
    //         if(info.id === ''){
    //             info.id = 'hidden';
    //         }
    // }
    // const onMouseOver = (e) => {
    //     const info = e.target.nextSibling
    //         if(info.id === 'hidden'){
    //             info.id = '';
    //         }
    // // //    .remove('hidden')
    // }
    return(
        // <div className='movieBox'>
        //     <Link to={{
        //         pathname:'/browse/detail',
        //         state:{
        //             title,
        //             year,
        //             runtime,
        //             genres,
        //             largeImage,
        //             summary,
        //             id,
        //             api
        //         }
        //     }}>
        //     <img onMouseOverCapture={onMouseOver} onMouseOutCapture={onMouseOut} src={image} alt={title}/>
        //     <div className='movie_info' id='hidden'>
        //         <span className='title'>{title}</span>
        //         <div className='infobox'>
        //         <span className='year'>{year}</span>
        //         <span className='runtime'>{`${runtime}m`}</span>
        //         </div>
        //         <ul>
        //             {genres.map((genre,index) => (<li key={index}>{genre}</li>))}
        //         </ul>
        //     </div>
        //     </Link>
        //     </div>
        <div>Movie</div>
    )
}

export default Movie;