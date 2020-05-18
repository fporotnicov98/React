import React from 'react'
import style from './Profile.module.scss';
import Friends from './Friends/Friends';
import MyPosts from './MyPosts/MyPosts';
import Preloader from '../common/preloader/Preloader';


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
                <li>Facebook: <a href="">{props.profile.contacts.facebook}</a></li>
                <li>Vk: <a href="">{props.profile.contacts.vk}</a></li>
                <li>Website: <a href="">{props.profile.contacts.website}</a></li>
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
                            <MyPosts profilePage={this.props.profilePage} addPost={this.props.addPost} updateNewPostText={this.props.updateNewPostText} setLike={this.props.setLike} />
                        </div>
                    </div>
                </section >
            )
    }
};


export default Profile;