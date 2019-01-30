import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
	state = {
		hover: false,
	}
	toggleHover = () => {
		this.setState({
			hover: !this.state.hover
		})
	}
	render(){
		return (			
			<div 
				key={this.props.id} 
				id={this.props.title} 
				className="title" 
				list-type={this.props.listType}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
			>
				<img 
					className='list-image' 
					alt={this.props.title}
					src={this.props.img} 
				/>
				<div className='list-title'>{this.props.title}</div>
				<div 
					className={`${this.props.listType==='mylist'&&this.state.hover ? 'remove' : ''} action-button`}
					onClick={() => {this.props.removeTitle(this.props.title, this.props.id, this.props.img)}}
				>Remove</div>
				<div 
					className={`${this.props.listType==='recommendations'&&this.state.hover ? 'add' : ''} action-button`}
					onClick={() => {this.props.addToMyList(this.props.id, this.props.title, this.props.img)}}
				>Add</div>
			</div>
		)
	}
}

List.propTypes = {	
	listType: PropTypes.string,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	hover: PropTypes.func.isRequired,
	removeTitle: PropTypes.func,
	addToMyList: PropTypes.func,
}


function mapStateToProps(state) {
	return { ...state };
}

export default connect(mapStateToProps)(List);