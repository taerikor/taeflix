import React from 'react'
import axios from 'axios';
import Movie from '../components/Movie'
import './MyList.css'



class MyList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],
             isLoading:true
        }
        
     }
     getMovies = async () => {
         const {
           data: {
             data: { movies }
           }
         } = await axios.get(
           "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
         );
         this.setState({movies,isLoading:false})
       };

     componentDidMount(){
      const { location, history} = this.props;
      const CURRENT_USER_LS = 'currentUser'
      if(location.state === undefined && !(localStorage.getItem(CURRENT_USER_LS))){
          history.push('/');
      }
         this.getMovies();
     }

    render(){
      const USERNAME = localStorage.getItem('currentUser')
        const {isLoading,movies} = this.state;
        const listNumber = localStorage.getItem(USERNAME)? JSON.parse(localStorage.getItem(USERNAME)).map(x => x.id) : null;
        const movieList = listNumber !== null ? listNumber.map(x => movies[x]) : null;
        if(listNumber !== null) {
            return (
                <>
                {isLoading ? <h1 className='loading'>Loading..</h1> :
                <>
                <div className='mylist_title'>MY LIST</div>
                <div className='mylistbox'>
                    {movieList.map((movie,index) => 
                  <Movie 
                  key={index} 
                  id={index} 
                  title={movie.title} 
                  image={movie.medium_cover_image}
                  year={movie.year}
                  runtime={movie.runtime}
                  genres={movie.genres}
                  summary={movie.summary}
                  largeImage={movie.large_cover_image}
                  />)}
                </div>
                </>
                }
                </>        
                )
            
        }else {
            return <h1 className='loading'>EMPTY </h1>
        }
    }
}

export default MyList;