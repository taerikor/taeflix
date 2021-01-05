import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css'


const Movie = ({image,title,year,runtime,genres,largeImage,summary,id,api}) => {
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
            <Link to={{
                pathname:'/browse/detail',
                state:{
                    title,
                    year,
                    runtime,
                    genres,
                    largeImage,
                    summary,
                    id,
                    api
                }
            }}>
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
            </Link>
            </div>
    )
}

export default Movie;