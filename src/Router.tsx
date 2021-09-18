import React from 'react'
import Profile from './routes/Auth'
import { HashRouter, Route,Switch } from 'react-router-dom';
import Home from './routes/Home';
import Navigator from './components/Navigator';
import MyList from './routes/MyList';
import Detail from './routes/Detail';

const USER_LS = 'currentUser'

const AppRouter = () => {
    return (
        <HashRouter>
        <Switch>
          <Route path='/' exact={true} component={Profile} />
          <Route path='/browse' component={Navigator}/>
          <Route path='/browse/mylist' component={MyList} />
          <Route path='/browse/detail'  component={Detail} />
          <Route path='/browse' exact={true}  component={Home} />
          </Switch>
        </HashRouter>
    )
}

export default AppRouter
