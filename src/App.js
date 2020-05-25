import React from 'react';
import style from './App.module.scss';
import './normalize.scss';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UserContainer from './components/User/UserContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
  return (
    <div className={style.wrapper}>
      <HeaderContainer />
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.main__row}>
            <div className={style.sidebar}>
              <NavbarContainer />
            </div>
            <div className={style.body}>
              <Route path='/friends' render={() => <UserContainer />} />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/messages' render={() => <DialogsContainer />} />
              <Route path='/login' render={() => <Login />} />
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
