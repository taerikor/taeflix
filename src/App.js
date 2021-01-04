import React from 'react'
import Profile from './routes/Profile'
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigator from './components/Navigator';
import MyList from './routes/MyList';
import Genre from './routes/Genre';


function App() {
  return <HashRouter>
      <Route path='/' exact={true} component={Profile} />
      <Route path='/browse' component={Navigator}/>
      <Route path='/browse'  component={Home} />
      <Route path='/browse/genre' component={Genre} />
      <Route path='/browse/mylist' component={MyList} />
    </HashRouter>


  }


export default App;
