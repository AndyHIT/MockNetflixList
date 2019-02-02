import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
	constructor(){
		super();
		this.state = {
			hover: false,
			overWhich: ''
		}
		this.mouseIn = this.mouseIn.bind(this);
		this.mouseOut = this.mouseOut.bind(this);
		this.isShown = this.isShown.bind(this);
	}
	
	mouseIn = (titleName) => {
		this.setState({
			hover: true,
			overWhich: titleName
		})
	}

	mouseOut = () => {
		this.setState({
			hover: false,
			overWhich: ''
		})
	}

	isShown = (titleName) => {
		return this.state.overWhich === titleName && this.state.hover === true
	}

	render(){
		return (			
			<div 
				key={this.props.id} 
				id={this.props.title} 
				className="title" 
				list-type={this.props.listType}
				onMouseEnter={ () => this.mouseIn(this.props.title) }
				onMouseLeave={this.mouseOut}
			>
				<div className='list-title'>{this.props.title}</div>
				<img 
					className='list-image' 
					alt={this.props.title}
					src={this.props.img} 
				/>
				<div 
					className={`${this.props.listType==='mylist'&&this.isShown(this.props.title) ? 'remove' : ''} action-button`}
					onClick={() => {this.props.removeTitle(this.props.title, this.props.id, this.props.img)}}
				>REMOVE FROM MY LIST</div>
				<div 
					className={`${this.props.listType==='recommendations'&&this.isShown(this.props.title) ? 'add' : ''} action-button`}
					onClick={() => {this.props.addToMyList(this.props.id, this.props.title, this.props.img)}}
				>+ My List</div>
			</div>
		)
	}
}

List.propTypes = {	
	listType: PropTypes.string,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	removeTitle: PropTypes.func,
	addToMyList: PropTypes.func,
}


function mapStateToProps(state) {
	return { ...state };
}

export default connect(mapStateToProps)(List);