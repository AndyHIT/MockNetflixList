import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import List from './_components/List.jsx';
import actions from './actions/action.js';

class App extends Component {
	constructor(props){
		super(props);
		
		this.removeTitle = this.removeTitle.bind(this);
		this.addToMyList = this.addToMyList.bind(this);
		this.isHovered = this.isHovered.bind(this);
	}

	compomentDidMount(){
		const { dispatch } = this.props;
		dispatch(actions.getAllTitles);
	}

	isHovered(title){
		const { titleList } = this.props;
		for(let i=0; i<titleList.mylist.length; i++){
			if(title === titleList.mylist[i].title){
				return true;
			}
		}
		for(let i=0; i<titleList.recommendations.length; i++){
			if(title === titleList.recommendations[i].title){
				return true;
			}
		}
		return false;
	}

	removeTitle(title, id, img){
		const { dispatch, mylist } = this.props;
		const item = { title, id, img };
		dispatch(actions.removeFromList(item, mylist));
	}

	addToMyList(id, title, img){
		const { dispatch, mylist, recommendations } = this.props;
		const newTitle = { title, id, img };
		dispatch(actions.addToList(newTitle, mylist, recommendations));
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<h2 className="list-header">My List</h2>
					<div className="list-container">
						{
							this.props.titleList.mylist.map((title) => {
								return (
									<List 
										key={title.title}
										id={title.id}
										title={title.title}
										img={title.img}
										listType='mylist'
										hover={this.isHovered}
										removeTitle={this.removeTitle}
									/>
								)
							})
						}
					</div>
					<h2 className="list-header">Recommendations</h2>
					<div className="list-container">
						{
							this.props.titleList.recommendations.map((title) => {
								return (
									<List 
										key={title.title}
										id={title.id}
										title={title.title}
										img={title.img}
										listType='recommendations'
										hover={this.isHovered}
										addToMyList={this.addToMyList}
									/>
								)
							})
						}
					</div>
				</div>
			</div>		
		)
	}
}

function mapStateToProps(state) {
	return { ...state };
}

export default connect(mapStateToProps)(App);
