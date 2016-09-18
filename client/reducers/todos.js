import { ADD_BLOG, DELETE_BLOG } from '../constants/ActionTypes';

const initState = {
	blogs:[
		{
			title:'test',
			author:'wangyafei',
			content:'test'
		}
	]
};

function addBlog(state, blog){
	let blogs = state['blogs'];
	let length = blogs.length;
	let newblog = Object.assign({}, blog, { id: length+1 });
	blogs = [...blogs, newblog];
	return Object.assign({}, state, {blogs: blogs});
}

function deleteBlog(state, blog){
	let blogs = state['blogs'];
	blogs = blogs.filter(blogItem=>blogItem['id']!=blog['id']);
	return Object.assign({}, state, {blogs: blogs});
}

export default function todos(state=initState, action){
	switch(action.type){
		case ADD_BLOG:
			return addBlog(state, action['blog']);
		case DELETE_BLOG:
			return deleteBlog(state, action['blog']);
		default:
			return state;
	}
}
