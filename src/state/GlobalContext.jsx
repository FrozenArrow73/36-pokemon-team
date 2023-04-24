import { createContext, useReducer } from "react";

const initialState = {
    team: [],
    pokedex: []
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {



    const reducer = (state, action) => {
        switch(action.type) {
            case 'ADD_TO_TEAM':
                for (let i = 0; i < state.team.length; i++) {
                    if (state.team[i].id = action.payload.id) return state
                }
                return {...state, team: [...state.team, action.payload]}
            case 'REMOVE_FROM_TEAM':
               const newState = state.team.filter((pokemon) => {
                return pokemon.id !== action.payload.id
               })
            return {...state, team: [...newState]}
            
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export {GlobalContextProvider}
export default GlobalContext