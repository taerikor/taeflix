import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from '../components/Movie'
import './MyList.css'



const MyList =()=>{

    //  const [movies,setMovies] = useState([])
    //  const [isLoading,setLoading] = useState(true) 
    //  const getMovies = async () => {
    //      const {
    //        data: {
    //          data: { movies }
    //        }
    //      } = await axios.get(
    //        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    //      );
    //      setMovies(movies)
    //      setLoading(false)
    //    };

    // useEffect(()=> {
    //    const CURRENT_USER_LS = 'currentUser'
    //   if(location.state === undefined && !(localStorage.getItem(CURRENT_USER_LS))){
    //       history.push('/');
    //   }
    //   getMovies();
    // },[])

    //   const USERNAME = localStorage.getItem('currentUser')
    //     const listNumber = localStorage.getItem(USERNAME)? JSON.parse(localStorage.getItem(USERNAME)).map(x => x.id) : null;
    //     const movieList = listNumber !== null ? listNumber.map(x => movies[x]) : null;
    //     if(listNumber !== null) {
    //         return (
    //             <>
    //             {isLoading ? <h1 className='loading'>Loading..</h1> :
    //             <>
    //             <div className='mylist_title'>MY LIST</div>
    //             <div className='mylistbox'>
    //                 {movieList.map((movie,index) => 
    //               <Movie 
    //               key={index} 
    //               id={index} 
    //               title={movie.title} 
    //               image={movie.medium_cover_image}
    //               year={movie.year}
    //               runtime={movie.runtime}
    //               genres={movie.genres}
    //               summary={movie.summary}
    //               largeImage={movie.large_cover_image}
    //               />)}
    //             </div>
    //             </>
    //             }
    //             </>        
    //             )
            
    //     }else {
    //         return <h1 className='loading'>EMPTY </h1>
    //     }
    return <div>My list</div>
}

export default MyList;