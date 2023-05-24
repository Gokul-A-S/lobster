import { EquipmentContext } from "../context/EquipmentContext";
import { useContext } from 'react'

export const useWorkoutsContext=()=>{
    const context=useContext(EquipmentContext)
    if(context===undefined){
        throw new Error('useEquipmentContext must be used within a EquipmentContextProvider')
    }
    return context

}