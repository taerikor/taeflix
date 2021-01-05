import React from 'react'
import axios from 'axios';
import Movie from '../components/Movie'

const USERNAME = localStorage.getItem('currentUser')

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
         this.getMovies();
     }

    render(){
        const {isLoading,movies} = this.state;
        const test = localStorage.getItem(USERNAME)? JSON.parse(localStorage.getItem(USERNAME)).map(x => x.id) : null;
        const test2 = test !== null ? test.map(x => movies[x]) : null;
        if(test !== null) {
            return (
                <>
                {isLoading ? <h1>loading..</h1> :
                <div>
                    {test2.map((movie,index) => 
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
                }
                </>        
                )
            
        }else {
            return <h1> My list is Empty </h1>
        }
    }
}

export default MyList;