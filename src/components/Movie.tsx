import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css'

interface MovieProps {
    title:string;
    year:number;
    runtime:number;
    genres:string[];
    largeImage:string;
    summary:string;
    id:number;
    image:string;
}

const Movie = ({title,year,runtime,genres,largeImage,summary,id,image}:MovieProps) => {
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
    return (
        <div className='movieBox'>
            <Link to={{
                pathname:'/detail',
                state:{
                    title,
                    year,
                    runtime,
                    genres,
                    largeImage,
                    summary,
                    id,
                }
            }}>
            <img src={image} alt={title} />
                <div className='movie_info' id='hidden'>
                    <span className='title'>{title}</span>
                    <div className='infobox'>
                        <span className='year'>{year}</span>
                        <span className='runtime'>{`${runtime}m`}</span>
                    </div>
                    <ul>
                        {genres.map((genre,index) => (<li key={index}>{genre}</li>))}
                    </ul>
                </div>
            </Link>
        </div>
    )
}

           //  onMouseOverCapture={onMouseOver} onMouseOutCapture={onMouseOut} 

export default Movie;