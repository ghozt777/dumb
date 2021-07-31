import { createContext, useContext, useReducer } from 'react'


const Context = createContext()

const ACTIONS = {
    increment:'+',
    decrement: '-'
}


function reducer(state,action) {
    console.log(action)
    switch(action.type){
        case ACTIONS.increment:
            return{
                count: state.count + 1
            }
        case ACTIONS.decrement:
            return{
                count : state.count - 1
            }
        default:
            return{
                ...state
            }
    }
}


export const useCountContext = () => useContext(Context)


export const SharedContext = ({ children }) => {

        const [state,dispatch] = useReducer(reducer , {count:0})

        return(
            <>
                <Context.Provider value={{state,dispatch}}>
                    {
                        children
                    }
                </Context.Provider>
            </>
        )
}