import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.placeName,
                    image: "https://images.all-free-download.com/images/graphiclarge/beautiful_flower_red_266128.jpg"
                })
            };

        case DELETE_PLACE:
            return {
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key
                }),
                selectedPlace: null
            };

        case SELECT_PLACE:
            return {
                selectedPlace: state.places.find(place => {
                    return place.key === key
                })
            };
        
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };

        default:
            return state;
    }
};

export default reducer;