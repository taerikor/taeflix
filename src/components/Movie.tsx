import React, { useState } from 'react';
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
    const [isMouseOver,setIsMouseOver] = useState(false)
    const onMouseOut = (e:React.MouseEvent<HTMLDivElement>) => {
        console.log('out')
        setIsMouseOver(false)
    }
    const onMouseOver = (e:React.MouseEvent<HTMLDivElement>) => {
        setIsMouseOver(true)
        // const info = e.target.nextSibling
        //     if(info.id === 'hidden'){
        //         info.id = '';
        //     }
    }
    return (
        <div className='movieBox' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
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
            {isMouseOver? (
            <div className='movie_info'>
                <span className='title'>{title}</span>
            {/* <div className='infobox'>
                <span className='year'>{year}</span>
                <span className='runtime'>{`${runtime}m`}</span>
            </div>
                <ul>
                    {genres.map((genre,index) => (<li key={index}>{genre}</li>))}
                </ul> */}
            </div>  
            ):<img src={image} alt={title} />}
            </Link>
        </div>
    )
}

           //  onMouseOverCapture={onMouseOver} onMouseOutCapture={onMouseOut} 

export default Movie;