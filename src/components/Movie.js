import React from 'react';
import './Movie.css'
// import { Link } from 'react-router-dom';


const Movie = ({image,title,year,runtime,genres}) => {
    const onMouseOut = (e) => {
        const info = e.target.nextSibling
        const showing = () => {
            if(info.id === ''){
                info.id = 'hidden';
            }
        }
        setTimeout(showing,500)
    }
    const onMouseOver = (e) => {
        const info = e.target.nextSibling
        const showing = () => {
            if(info.id === 'hidden'){
                info.id = '';
            }
        }
        setTimeout(showing,500)
    // //    .remove('hidden')
    }
    return(
        <div className='movieBox'>
            <img onMouseOverCapture={onMouseOver} onMouseOutCapture={onMouseOut} src={image} alt={title}/>
            <div className='movie_info' id='hidden'>
                <span className='title'>{title}</span>
                <div className='infobox'>
                <span className='year'>{year}</span>
                <span>{`${runtime}m`}</span>
                </div>
                <ul>
                    {genres.map((genre,index) => (<li key={index}>{genre}</li>))}
                </ul>
            </div>
            </div>
    )
}

export default Movie;