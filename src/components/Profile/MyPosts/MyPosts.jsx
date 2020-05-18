import React from 'react'
import style from './MyPosts.module.scss'

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
						<div className={style.image}></div>
						<div className={style.text}>{item.text}</div>
						<div className={style.like} onClick={() => { props.setLike(item.id) }}>{item.likeCount}<span><i className="fas fa-heart"></i></span></div>
					</div>
				)}
		</div>
	)
}

export default MyPosts;