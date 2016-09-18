import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/Blogs';
import BlogItem from '../../components/BlogItem/BlogItem';

export default class Blog extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { blogs, actions } = this.props;
		let blogItems = [];
		blogs.map((blog, index)=>{
			blogItems.push(blog.title+'--'+blog.author+'--'+blog.content)
		});
		return (
			<div className="blogsContainer">
				<div className="test">hello, world</div>
				<ul>
					{blogItems}
				</ul>
			</div>
		);
	}
}