import axios from 'axios';
import Movie from '../components/Movie'
import React, { useEffect, useState } from 'react'
import BestMovie from '../components/BestMovie'
import './Home.css'

const CURRENT_USER_LS = 'currentUser'



const Home = () => {
  //   const [movies,setMovies] = useState([])
  //   const [isLoading,setLoading] = useState(true) 

  //  const getMovies = async () => {
  //       const {
  //         data: {
  //           data: { movies }
  //         }
  //       } = await axios.get(
  //         "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  //       );
  //       setMovies(movies)
  //       setLoading(false)
  //     };
  //     useEffect(()=> {
  //       if(location.state === undefined && !(localStorage.getItem(CURRENT_USER_LS))){
  //           history.push('/');
  //       }
  //       getMovies();
  //     },[])
    
  //       return (
  //       <section className='container'>
  //           {isLoading? <h1 className='loading'>Loading...</h1> 
  //           :<div className='movies'>
  //           <div className='bestMovie_container'>
  //             <div className='movie1'>
  //             <BestMovie title={movies[0].title} image={movies[0].large_cover_image}></BestMovie>
  //             </div>
  //             <div className='sidebox'>
  //               <div className='movie2'>
  //             <BestMovie title={movies[1].title} image={movies[1].large_cover_image}></BestMovie>    
  //               </div>
  //               <div className='movie3'>
  //             <BestMovie title={movies[2].title} image={movies[2].large_cover_image}></BestMovie>
  //               </div>
  //           </div>
  //             </div>
  //           <div className='movie_container'>
  //             {movies.map((movie,index) => 
  //             <Movie 
  //             key={movie.id} 
  //             id={index} 
  //             title={movie.title} 
  //             image={movie.medium_cover_image}
  //             year={movie.year}
  //             runtime={movie.runtime}
  //             genres={movie.genres}
  //             summary={movie.summary}
  //             largeImage={movie.large_cover_image}
  //             />)}
  //           </div>
  //           </div>
  //           }
  //       </section>

  //       )
  return (
    <div>Home</div>
  )
}

export default Home; 