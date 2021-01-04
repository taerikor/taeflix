import axios from 'axios';
import React from 'react'
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
            :<h2>Done</h2>
            }
        </section>

        )
    }
}

export default Home; 