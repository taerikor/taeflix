import React, { useEffect, useState } from 'react'
import { HashRouter, Route,Switch } from 'react-router-dom';
import Home from './routes/Home';
import Navigator from './components/Navigator';
import MyList from './routes/MyList';
import Detail from './routes/Detail';
import Auth from './routes/Auth';



function App() {
  const USER_LS = 'currentUser'
  const [user,setUser] = useState<string | null>(null)
  
  const loginUser = () => {
    const user = localStorage.getItem(USER_LS)
    console.log(user)
    if(user){
      setUser(user)
    }else if(user === null){
      setUser(null)
    }
  }

  useEffect(() => {
    loginUser()
  },[])


  return <HashRouter>
    {user && <Navigator userName={user} loginUser={loginUser} USER_LS={USER_LS} />}
    <Switch>
      {user ? (
        <>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/detail' >
            <Detail />
          </Route>
          <Route exact path='/mylist' >
            <MyList />
          </Route>
        </>
      ):(
        <Route exact path='/' >
          <Auth USER_LS={USER_LS} loginUser={loginUser}/>
        </Route>
      )}
    </Switch>
  </HashRouter>
  }


export default App;
