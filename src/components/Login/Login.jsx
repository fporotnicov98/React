import React from 'react';
import style from './Login.module.scss';
import { reduxForm, Field } from 'redux-form';

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p htmlFor="signin">Sign in</p>
            <label htmlFor="email"></label>
            <Field
                name='email'
                component='input'
                type='email'
                placeholder='Email'
                required='required'
            />
            <label htmlFor="password"></label>
            <Field
                name='password'
                component='input'
                type='password'
                placeholder='Password'
                required='required'
            />
            <Field
                name='rememberMe'
                component='input'
                type='checkbox'
                id='remember'
            />
            <label htmlFor="rememberMe" className={style['save']}>Remember me</label>
            <div className={style['buttons']}>
                <button className={style['login']} type="submit"><span>Sign in</span></button>
                <button className={style['clear']} type="button" onClick={props.reset}><span>Clear Values</span></button>
            </div>

        </form>
    )
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)

class Login extends React.Component {
    onSubmit = (formData) => {
        console.log(formData);
    }
    render() {
        return (
            // <div className={style['bg']}>
                <div className={style['wrapper']}>
                    <button onClick={e => this.close(e)} className={style["close-auth"]}>&times;</button>
                    <LoginForm onSubmit={this.onSubmit}/>
                </div>
            // </div>
        )
    }
    close(e) {
        e.preventDefault();
    }
}

export default Login;