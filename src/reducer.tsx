import { initialState } from "./context";

type ACTIONTYPE =
    | { type: 'GET_PHOTOS_BEGINS' }
    | { type: 'GET_PHOTOS_SUCCESS', payload: {}[] }
    | { type: 'GET_PHOTOS_ERROR', payload: string }
    | { type: 'UPDATE_PAGE' }
    | { type: 'UPDATE_QUERY', payload: string }
    | { type: 'SET_PAGE' }
    | { type: 'TOGGLE_LIKE', payload: string }
    | { type: 'DELETE_ITEM', payload: string }
    | { type: 'TOGGLE_LIKED_FILTER' };


const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'GET_PHOTOS_BEGINS':
            console.log('dispatched')
            return { ...state }
        case 'UPDATE_QUERY':
            console.log(action.payload);
            return { ...state, query: action.payload }
    }
    return { ...state }
}

export default reducer;