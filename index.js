const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const ADOPT_CAT = 'ADOPT_CAT';
const ADOPT_DOG = 'ADOPT_DOG';

const initialCatState = {
	numberOfCats: 15
};

const initialDogState = {
	numberOfDogs: 20
};

function adoptCat() {
	//action creator
	return {
		type: ADOPT_CAT,
		info: 'congrats you adopt a cat'
	}
}

function adoptDog() {
	//action creator
	return {
		type: ADOPT_DOG,
		info: 'congrats you adopt a dog'
	}
}

const catReducer = (state = initialCatState, action) => {
	switch (action.type) {
		case ADOPT_CAT:
			return {
				...state,
				numberOfCats: state.numberOfCats - 1
			}
		default:
			return state;
	}
};

const dogReducer = (state = initialDogState, action) => {
	switch (action.type) {
		case ADOPT_DOG:
			return {
				...state,
				numberOfDogs: state.numberOfDogs - 1
			}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	cat: catReducer,
	dog: dogReducer
});
const shelter = redux.createStore(rootReducer); //created one  store with two different reducers
console.log('initial state:', shelter.getState());
const unsubscribe = shelter.subscribe(() => console.log('Updated state:', shelter.getState()));
shelter.dispatch(adoptCat()); //adopted 1. cat
shelter.dispatch(adoptDog()); //adopted 1. dog
shelter.dispatch(adoptCat()); //adopted 2. cat
shelter.dispatch(adoptCat()); //adopted 3. cat
shelter.dispatch(adoptDog()); //adopted 2. dog
unsubscribe();
