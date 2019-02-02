export const RETRIEVE_MYLIST = 'RETRIEVE_MYLIST';
export const RETRIEVE_RECOMMENDATIONS = 'RETRIEVE_RECOMMENDATIONS';
export const ADD_TO_MYLIST = 'ADD_TO_MYLIST';
export const REMOVE_FROM_MYLIST = 'REMOVE_FROM_MYLIST';

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

export function getMyListTitles() {
	return (dispatch, getState) => {
		fetch('myList.json')
		.then(response => {
			console.log(response);
			return response.json();
		})
		.then(data => {	
			console.log(data);
			dispatch(sendMyListTitlesToReducer(data));
		})
		.catch(() => {
			alert('Error when pulling my list titles');
		});
	}
}

export function getRecommendationsTitles() {
	return (dispatch, getState) => {
		fetch('recommendations.json')
		.then(response => {
			console.log(response);
			return response.json();
		})
		.then(data => {
			console.log(data);
			dispatch(sendMyRecommendationsToReducer(data));
		});
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

export default { getMyListTitles, getRecommendationsTitles, addToList, removeFromList };