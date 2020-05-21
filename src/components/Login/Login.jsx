import React from 'react';
import style from './Login.module.scss';

class Login extends React.Component {
    render() {
        return (
            <div className={style['wrapper']}>
                <form>
                    <label for="signin">Sign in</label>
                    <div id="wrapper">
                        <div id="arrow"></div>
                        <input id="email" placeholder="Email" type="text" />
                        <input id="pass" placeholder="Password" type="password" />
                    </div>
                    <button type="submit">
                        <span>
                            Sign in
                        </span>
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;