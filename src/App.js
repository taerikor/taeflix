import React from 'react'
import Profile from './routes/Profile'
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigator from './components/Navigator';
import MyList from './routes/MyList';
import Detail from './routes/Detail';


function App() {
  return <HashRouter>
      <Route path='/' exact={true} component={Profile} />
      <Route path='/browse' component={Navigator}/>
      <Route path='/browse/mylist' component={MyList} />
      <Route path='/browse/detail'  component={Detail} />
      <Route path='/browse'  component={Home} />
    </HashRouter>


  }


export default App;
