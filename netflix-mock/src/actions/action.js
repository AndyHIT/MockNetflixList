import titles from '../api/titles.js'

export const RETRIEVE_MYLIST = 'RETRIEVE_MYLIST';
export const RETRIEVE_RECOMMENDATIONS = 'RETRIEVE_RECOMMENDATIONS';
export const ADD_TO_MYLIST = 'ADD_TO_MYLIST';
export const REMOVE_FROM_MYLIST = 'REMOVE_FROM_MYLIST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

function sendMyListTitlesToReducer(titles) {
	return {
		type: RETRIEVE_MYLIST,
		titles
	}
}

function sendMyRecommendationsToReducer(titles) {
	return {
		type: RETRIEVE_RECOMMENDATIONS,
		titles
	}
}

export function getAllTitles() {
	return (dispatch, getState) => {
		titles.getMyList(titles => {
			dispatch(sendMyListTitlesToReducer(titles))
		});
		titles.getRecommendations(titles => {
			dispatch(sendMyRecommendationsToReducer(titles))
		})
	}
}

export function addToList(title, mylist, recommendations) {
	return {
		type: ADD_TO_MYLIST,
		title,
		mylist,
		recommendations
	}
}

export function removeFromList(title, mylist){
	return {
		type: REMOVE_FROM_MYLIST,
		title,
		mylist
	}
}

export function setVisibilityFilter(filter){
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export default { getAllTitles, addToList, removeFromList, setVisibilityFilter };