import React from 'react';
import style from './App.module.scss';
import './normalize.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.main__row}>
            <Navbar store={props.store} />
            <Route exact path='/profile' render={() => <Profile store={props.store} />} />
            <Route path='/messages' render={() => <DialogsContainer store={props.store} />} />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
