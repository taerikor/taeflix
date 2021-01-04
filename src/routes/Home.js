import axios from 'axios';
import React from 'react'
import Movie from '../components/Movie'
import BestMovie from '../components/BestMovie'
import './Home.css'

const CURRENT_USER_LS = 'currentUser'



class Home extends React.Component {
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
        if(location.state === undefined && !(localStorage.getItem(CURRENT_USER_LS))){
            history.push('/');
        }
        this.getMovies();
    }
    render(){
        const { isLoading, movies } = this.state;
        return (
        <section className='container'>
            {isLoading? <h1>Loading...</h1> 
            :<div className='movies'>
            <div className='bestMovie_container'>
              <BestMovie title={movies[0].title} image={movies[0].large_cover_image}></BestMovie>
              <BestMovie title={movies[1].title} image={movies[1].large_cover_image}></BestMovie>
              <BestMovie title={movies[2].title} image={movies[2].large_cover_image}></BestMovie>
            </div>
            <div className='movie_container'>
              {movies.map(movie => 
              <Movie 
              key={movie.id} 
              id={movie.id} 
              title={movie.title} 
              image={movie.medium_cover_image}
              year={movie.year}
              runtime={movie.runtime}
              genres={movie.genres}
              />)}
            </div>
            </div>
            }
        </section>

        )
    }
}

export default Home; 