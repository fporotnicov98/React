import React from 'react'
import style from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = (props) => {

	let newPostElement = React.createRef();

	let postElements = props.posts.map(item => <Post text={item.text} likeCount={item.likeCount} />);

	let addPost = () => {
		props.dispatch( {type: 'ADD-POST'} );
	};

	let onPostChange = () => {
		let post = newPostElement.current.value;
		props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: post} );
	}

	return (
		<div className={style.posts}>
			<div className={style.title}>My posts</div>
			<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
			<div className={style.btn} onClick={addPost} ><a href="#s">Publish</a></div>
			{postElements}
		</div>
	)
}

export default MyPosts;