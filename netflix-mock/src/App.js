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
	}

	compomentDidMount(){
		const { dispatch } = this.props;
		dispatch(actions.getMyListTitles());
		dispatch(actions.getRecommendationsTitles());
	}

	removeTitle(title, id, img){
		const { dispatch, titleList } = this.props;
		const item = { title, id, img };
		dispatch(actions.removeFromList(item, titleList.mylist));
	}

	addToMyList(id, title, img){
		const { dispatch, titleList } = this.props;
		const newTitle = { title, id, img };
		dispatch(actions.addToList(newTitle, titleList.mylist, titleList.recommendations));
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<img className="logo" src='https://assets.nflxext.com/en_us/pages/wiplayer/logo_v3.svg' alt="NetFlix" />
					<h2 className="list-header">My List</h2>
					<div className="list-container">
						{ (this.props.titleList !== undefined && this.props.titleList.mylist!==undefined) ? (
							this.props.titleList.mylist.map((title) => {
								return (
									<List 
										key={title.title}
										id={title.id}
										title={title.title}
										img={title.img}
										listType='mylist'
										removeTitle={this.removeTitle}
									/>
								)
							})
						) : ''}
					</div>
					<h2 className="list-header">Recommendations</h2>
					<div className="list-container">
						{ (this.props.titleList !== undefined && this.props.titleList.recommendations!==undefined) ? (
							this.props.titleList.recommendations.map((title) => {
								return (
									<List 
										key={title.title}
										id={title.id}
										title={title.title}
										img={title.img}
										listType='recommendations'
										addToMyList={this.addToMyList}
									/>
								)
							})
						) : ''}
					</div>
				</div>
			</div>		
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	return { ...state };
}

export default connect(mapStateToProps)(App);
