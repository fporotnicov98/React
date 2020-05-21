import React from 'react'
import style from './Profile.module.scss';
import Friends from './Friends/Friends';
import MyPosts from './MyPosts/MyPosts';
import Preloader from '../common/preloader/Preloader';
// import { Redirect } from 'react-router-dom';


const Avatar = (props) => {
    return (
        <div className={style.avatar}>
            <div className={style.avatar__image}> <img src={props.profile.photos.large} alt="" /></div>
            <a href="#s" className={style.edit}><span>Edit</span></a>
        </div>
    )
}

const Desc = (props) => {
    return (
        <div className={style.description}>
            <h1>{props.profile.fullName}</h1>
            <span>{props.profile.aboutMe}</span>
            <p>Contacts</p>
            <ul>
                <li style={props.profile.contacts.facebook !== null ? {display: 'block'} : {display: 'none'}}>Facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></li>
                <li style={props.profile.contacts.vk !== null ? {display: 'block'} : {display: 'none'}}>Vk: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></li>
                <li style={props.profile.contacts.website !== null ? {display: 'block'} : {display: 'none'}}>Website: <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></li>
                <li style={props.profile.contacts.github !== null ? {display: 'block'} : {display: 'none'}}>Github: <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></li>
                <li style={props.profile.contacts.instagram !== null ? {display: 'block'} : {display: 'none'}}>Instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></li>
                <li style={props.profile.contacts.twitter !== null ? {display: 'block'} : {display: 'none'}}>Twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></li>
                <li style={props.profile.contacts.youtube !== null ? {display: 'block'} : {display: 'none'}}>YouTube: <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></li>
            </ul>
        </div>
    )
}

class Profile extends React.Component {
    
    render() {
        
        if (!this.props.profile) {
            return <Preloader />
        } else
            return (
                <section className={style.profile}>
                    <div className={style.profile__row}>
                        <div className={style.left}>
                            <Avatar profile={this.props.profile} />
                            <Friends profilePage={this.props.profilePage} />
                        </div>
                        <div className={style.right}>
                            <Desc profile={this.props.profile} />
                            <MyPosts profile={this.props.profile} profilePage={this.props.profilePage} addPost={this.props.addPost} updateNewPostText={this.props.updateNewPostText} setLike={this.props.setLike} />
                        </div>
                    </div>
                </section >
            )
    }
};


export default Profile;