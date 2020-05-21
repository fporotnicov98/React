import React from 'react'
import style from './MyPosts.module.scss'
import user from './../../../asets/images/user.png'

const MyPosts = (props) => {
	let state = props.profilePage;
	let onAddPost = () => {
		props.addPost();
	};
	let onPostChange = (event) => {
		let post = event.target.value;
		props.updateNewPostText(post);
	}
	return (
		<div className={style.posts}>
			<div className={style.title}>My posts</div>
			<textarea onChange={onPostChange} value={state.newPostText} />
			<div className={style.btn} onClick={onAddPost} ><a href="#s">Publish</a></div>
			{
				state.posts.map(item =>
					<div key={item.id} className={style.post}>
						<div className={style.image}>{(props.profile.photos.small !== null) ? <img src={props.profile.photos.small} alt=''/> :  <img src={user} alt=''/>}</div>
						<div className={style.text}>{item.text}</div>
						<div className={style.like} onClick={() => { props.setLike(item.id) }}>{item.likeCount}<span style={item.likeCount === 0 ? {color: '#55677d'} : {color: 'red'} }><i className="fas fa-heart"/></span></div>
					</div>
				)}
		</div>
	)
}

export default MyPosts;