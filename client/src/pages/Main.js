import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EquipmentDetails from "../components/EquipmentDetails";
import EquipmentForm from "../components/EquipmentForm";
import { useEquipmentsContext } from "../hooks/useEquipmentContext";
import { useAuthContext } from '../hooks/useAuthContext'
const Home = () => {
    const eqpCopy=useLocation().state?.eqp
    const { workouts, dispatch } = useEquipmentsContext()
    const { user } = useAuthContext()
    useEffect(() => {
        const getLabs = async () => {
            try {
                const response = await fetch('http://localhost:4096/api/labs',{
                    headers:{
                        'Authorization': `Bearer ${user.token}`,
                    }
                })
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SET_LAB', payload: json })
                }
                else {
                    console.log(json)
                }
            }
            catch (error) {
                console.log(error.message)
            }

        }
        if (user){
            getLabs()
        }
        else{
            console.log("Authorization required")
        }
        const getWorkouts = async () => {
            try {
                const response = await fetch('http://localhost:4096/api/equipments', {
                    headers:{
                        'Authorization':`Bearer ${user.token}`
                    }
                })
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SET_EQP', payload: json })
                }
                else {
                    console.log(json)
                }
            }
            catch (error) {
                console.log(error.message)
            }

        }
        if (user) {
            getWorkouts()
        }
        else{
            console.log("Authorization required")
        }


    }, [dispatch,user])

   if(!eqpCopy){
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout, index) => (
                    <div key={index}>
                        <EquipmentDetails workout={workout} key={workout._id} />
                    </div>
                ))
                }
            </div>
            <EquipmentForm />
        </div>
    )
}
    else{
        return(
            <div className="home">
            <div className="workouts">
                {eqpCopy && eqpCopy.map((eqpCopy, index) => (
                    <div key={index}>
                        <EquipmentDetails workout={eqpCopy} key={eqpCopy._id}  />
                    </div>
                ))
                }
            </div>
            <EquipmentForm />
        </div>
        )
    }
   }

export default Home;