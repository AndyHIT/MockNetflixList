import React from 'react';
import PropTypes from 'prop-types';

function List(props){
	return (
		<div 
			key={props.id} 
			id={props.title} 
			className="title-item" 
			list-type={props.listType}
			onMouseEnter={() => {props.updateHoverState(true)}}
			//onMouseLeave={() => {props.updateHoverState(true)}}
		>
			<img 
				className='list-image' 
				alt={props.title}
				src={props.img} 
			/>
			<div className='list-title'>{props.title}</div>
			<div 
				className={`${props.listType==='mylist' ? 'remove' : ''} action-button`}
				onClick={() => {props.removeTitle(props.title, props.id, props.img)}}
			>Remove</div>
			<div 
				className={`${props.listType==='recommendations' ? 'add' : ''} action-button`}
				onClick={() => {props.addToMyList(props.id, props.title, props.img)}}
			>Add</div>
		</div>
	)
}

List.propTypes = {	
	listType: PropTypes.string,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	hover: PropTypes.bool,
	updateHoverState : PropTypes.func.isRequired,
	removeTitle: PropTypes.func,
	addToMyList: PropTypes.func,
}

export default List;