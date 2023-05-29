import { LabContext } from "../context/LabContext";
import { useContext } from 'react'

export const useLabContext=()=>{
    const context=useContext(LabContext)
    if(context===undefined){
        throw new Error('useLabContext must be used within a LabContextProvider')
    }
    return context
}