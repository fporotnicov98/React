import React from 'react';
import style from './App.module.scss';
import './normalize.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <main className={style.main}>
          <div className={style.container}>
            <div className={style.main__row}>
              <Navbar state={props.state.navigations} />
              <Route exact path='/profile' render={() => <Profile profilePage={props.state.profilePage} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>} />
              <Route path='/messages' render={() => <Dialogs state={props.state.dialogsPage} addMess={props.addMess}/>} />
            </div>
          </div>
        </main>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App;
