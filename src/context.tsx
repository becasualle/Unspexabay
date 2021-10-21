import React, { useReducer, useEffect } from 'react';
import reducer from './reducer';
import { clientID, mainUrl, searchUrl } from './constants';

type State = {
    isLoading: boolean;
    all_photos: [];
    photos: [];
    liked_photos: [];
    page: number;
    query: string;
    isLikedFilterOn: boolean;
}

interface AppContextInterface {
    state: State,
    dispatch: React.Dispatch<any>;
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const initialState: State = {
    isLoading: false,
    all_photos: [],
    photos: [],
    liked_photos: [],
    page: 1,
    query: '',
    isLikedFilterOn: false
};

const AppContext = React.createContext<AppContextInterface>({} as AppContextInterface);

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { page, query } = state;

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch({ type: 'UPDATE_QUERY', payload: e.currentTarget.value })
    }

    const fetchImages = async () => {
        dispatch({ type: 'GET_PHOTOS_BEGINS' })

        let url: string;
        const urlPage: string = `&page=${page}`
        const urlQuery: string = `&query=${query}`

        if (query) {
            url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
        } else {
            url = `${mainUrl}${clientID}${urlPage}`
        }
        try {
            const response = await fetch(url);
            const data: any = await response.json();
            dispatch({ type: 'GET_PHOTOS_SUCCESS', payload: data })
        } catch (error) {
            dispatch({ type: 'GET_PHOTOS_ERROR', payload: error })
        }
    }

    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line
    }, [page])


    return <AppContext.Provider value={{
        state,
        dispatch,
        handleChange
    }}>{children}</AppContext.Provider>
}


export { initialState, AppContext, AppProvider };
