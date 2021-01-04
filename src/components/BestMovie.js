import React from 'react';
import './BestMoive.css'
// import { Link } from 'react-router-dom';

const BestMovie = ({image,title}) => {
    return(
        <div className='bestmovieBox'>
            <img src={image} alt={title}/>
            </div>
    )
}

export default BestMovie;