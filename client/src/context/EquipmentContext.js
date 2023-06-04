import { createContext ,useReducer} from "react";

export const EquipmentContext=createContext()

export const EquipmentReducer=(state,action)=>{
    switch(action.type){
        case 'SET_EQP':{
            return{
                workouts:action.payload
            }
        }
        case 'CREATE_EQP':{
            return{
                workouts:[action.payload,...state.workouts]
            }
        }
        case 'DELETE_EQP':{
            return{
                workouts:state.workouts.filter((workout)=>workout._id!==action.payload._id)
            }
        }
        case 'UPDATE_EQP':{
            return{
                workouts:[action.payload,state.workouts.filter((workout)=>workout._id!==action.payload._id)]
            }
        }
        default:{
            return state
        }
    }

}

export const EquipmentContextProvider=({children})=>{

    const [state,dispatch]=useReducer(EquipmentReducer,{workouts:null})

    return(
        <EquipmentContext.Provider value={{...state,dispatch}}>
            {children}
        </EquipmentContext.Provider>
            
    )
}