import React from 'react';
import style from './App.module.scss';
import './normalize.scss';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UserContainer from './components/User/UserContainer';


const App = (props) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.main__row}>
            <div className={style.sidebar}>
              <NavbarContainer />
            </div>
            <div className={style.body}>
              <Route exact path='/friends' render={() => <UserContainer />} />
              <Route exact path='/profile' render={() => <ProfileContainer />} />
              <Route path='/messages' render={() => <DialogsContainer />} />
            </div>

          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
