import { initialState } from "./context";

type ACTIONTYPE =
    | { type: 'GET_PHOTOS_BEGINS' }
    | { type: 'GET_PHOTOS_SUCCESS', payload: {}[] }
    | { type: 'GET_PHOTOS_ERROR', payload: unknown }
    | { type: 'UPDATE_PAGE' }
    | { type: 'UPDATE_QUERY', payload: string }
    | { type: 'SET_PAGE' }
    | { type: 'TOGGLE_LIKE', payload: string }
    | { type: 'DELETE_ITEM', payload: string }
    | { type: 'TOGGLE_LIKED_FILTER' };


const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'GET_PHOTOS_BEGINS':
            return { ...state, isLoading: true }
        case 'GET_PHOTOS_ERROR':
            console.log(action.payload)
            // if (typeof action.payload === "string") {
            //     console.log(action.payload.toUpperCase())
            // } else if (action.payload instanceof Error) {
            //     console.log(action.payload.message)
            // }
            return { ...state, isLoading: false }
        case 'GET_PHOTOS_SUCCESS':
            const { query, page } = state;
            let data: any = action.payload;

            if (query) {
                // Иногда получаем дубликаты от API. Чтобы избежать их - фильтруем поступивший массив, избавлясь от элементов с таким же id, как у элементов в photos
                data = data.results.filter((item: any) => !state.photos.some((photo: any) => photo.id === item.id))
            }

            if (query && page === 1) {
                return { ...state, all_photos: data, photos: data, isLoading: false }
            } else if (query) {
                return { ...state, all_photos: [...state.photos, ...data], photos: [...state.photos, ...data], isLoading: false }
            } else {
                data = action.payload.filter((item: any) => !state.photos.some((photo: any) => photo.id === item.id))
                return { ...state, all_photos: [...state.photos, ...data], photos: [...state.photos, ...data], isLoading: false }
            }

        case 'UPDATE_QUERY':
            console.log(action.payload);
            return { ...state, query: action.payload }
    }
    return { ...state }
}

export default reducer;