import { createContext ,useReducer} from "react";

export const WorkoutContext=createContext()

export const workoutsReducer=(state,action)=>{
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
        default:{
            return state
        }
    }

}

export const WorkoutContextProvider=({children})=>{

    const [state,dispatch]=useReducer(workoutsReducer,{workouts:null})

    return(
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
            
    )
}