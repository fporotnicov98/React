import React from 'react'
import style from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = (props) => {

	let postElements = props.posts.map(item => <Post text={item.text} likeCount={item.likeCount} />);

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
			<textarea onChange={onPostChange} value={props.newPostText} />
			<div className={style.btn} onClick={onAddPost} ><a href="#s">Publish</a></div>
			{postElements}
		</div>
	)
}

export default MyPosts;