import { createContext,useReducer } from "react";
export const LabContext=createContext()


export const LabReducer=(state,action)=>{
    switch(action.type){
        case 'SET_LAB':{
            return{
                labs:action.payload
            }
        }
        case 'CREATE_LAB':{
            return{
                labs:[action.payload,...state.labs]
            }
        }
        case 'DELETE_LAB':{
            return{
                labs:state.labs.filter((lab)=>lab._id!==action.payload._id)
            }
        }
        default:{
            return state
        }
    }
}
export const LabContextProvider=({children})=>{
    const [state,dispatch]=useReducer(LabReducer,{labs:null})
    return(
    <LabContext.Provider value={{...state,dispatch}}>
        {children}
    </LabContext.Provider>)
}