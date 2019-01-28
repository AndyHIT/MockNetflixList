import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import List from './_components/List.jsx';
import actions from './actions/action.js';

class App extends Component {
	constructor(props){
		super(props);
		this.updateHoverState  = this.updateHoverState .bind(this);
		this.removeTitle = this.removeTitle.bind(this);
		this.addToMyList = this.addToMyList.bind(this);
	}

	compomentDidMount(){
		const { dispatch } = this.props;
		dispatch(actions.getAllTitles);
	}

	updateHoverState(filter){
		const { dispatch } = this.props;
		dispatch(actions.setVisibilityFilter(filter));
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
									<div className="title">
										<List 
											key={title.id}
											id={title.id}
											title={title.title}
											img={title.img}
											listType='mylist'
											updateHoverState={this.updateHoverState}
											removeTitle={this.removeTitle}
										/>
									</div>
								)
							})
						}
					</div>
					<h2 className="list-header">Recommendations</h2>
					<div className="list-container">
						{
							this.props.titleList.recommendations.map((title) => {
								return (
									<div className="title">
										<List 
											key={title.id}
											id={title.id}
											title={title.title}
											img={title.img}
											listType='recommendations'
											updateHoverState={this.updateHoverState}
											addToMyList={this.addToMyList}
										/>
									</div>
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
