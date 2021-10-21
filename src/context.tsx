import React, { PropsWithChildren, useContext, useReducer } from 'react';
import App from './App';
import reducer from './reducer';

// https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm

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


const AppContext = React.createContext<AppContextInterface | undefined>(undefined);

// const sampleAppContext: AppContextInterface = {
//     name: "Using React Context in a Typescript App",
//     author: "thehappybug",
//     url: "http://www.example.com",
// };

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch({ type: 'UPDATE_QUERY', payload: e.currentTarget.value })
    }

    return <AppContext.Provider value={{
        state,
        dispatch,
        handleChange
    }}>{children}</AppContext.Provider>
}


export { initialState, AppContext, AppProvider };