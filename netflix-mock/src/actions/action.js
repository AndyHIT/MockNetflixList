//import json from '../api/myList.json';
import titles from '../api/titles.js';

export const RETRIEVE_MYLIST = 'RETRIEVE_MYLIST';
export const RETRIEVE_RECOMMENDATIONS = 'RETRIEVE_RECOMMENDATIONS';
export const ADD_TO_MYLIST = 'ADD_TO_MYLIST';
export const REMOVE_FROM_MYLIST = 'REMOVE_FROM_MYLIST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const json = [
	{
		"title": "Futurama",
		"id": 1,
		"img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
	},
	{
		"title": "The Interview",
		"id": 2,
		"img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
	},
	{
		"title": "Gilmore Girls",
		"id": 3,
		"img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
	}
]

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
	console.log(json);
	return (dispatch, getState) => {
		// fetch(json)
		// .then(response => {
		// 	//console.log(response.json());
		// 	response.json()
		// })
		// .then(data => {	
		// 	console.log(data);
		// 	dispatch(sendMyListTitlesToReducer(data));
		// })
		// .catch(() => {
		// 	alert('Error when pulling my list titles');
		// });

		// fetch('../api/recommendations.json').then(data => {
		// 	dispatch(sendMyRecommendationsToReducer(data));
		// });

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