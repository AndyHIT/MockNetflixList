import { combineReducers } from 'redux';
import { 
	RETRIEVE_MYLIST, 
	RETRIEVE_RECOMMENDATIONS,
	ADD_TO_MYLIST,
	REMOVE_FROM_MYLIST,
	//SET_VISIBILITY_FILTER
} from '../actions/action.js';

const titleList = (state=[], action) => {
	switch (action.type) {
		case RETRIEVE_MYLIST:
			return {
				...state,
				mylist: action.titles
			}
		case RETRIEVE_RECOMMENDATIONS:
			return {
				...state,
				recommendations: action.titles
			}
		case ADD_TO_MYLIST:
			return {
				...state,
				mylist: [...state.mylist, action.title],
				recommendations: state.recommendations.filter(recommendations => 
					recommendations.title !== action.title.title
				)
			}
		case REMOVE_FROM_MYLIST:
			return {
				...state,
				mylist: state.mylist.filter(mylist => 
					mylist.title !== action.title.title
				)
			}
		default:
			return {...state}
	}
}

// const visibilityFilter = (state=[], action) => {
// 	switch (action.type) {
// 		case SET_VISIBILITY_FILTER:
// 			return {
// 				...state,
// 				filter: action.filter
// 			}
// 		default:
// 			return state
// 	}
// }

const reducers = combineReducers({
	//titleList, visibilityFilter
	titleList
})

export default reducers
