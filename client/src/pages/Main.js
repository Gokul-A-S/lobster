import { useEffect } from "react";
import EquipmentDetails from "../components/EquipmentDetails";
import EquipmentForm from "../components/EquipmentForm";
import { useEquipmentsContext } from "../hooks/useEquipmentContext";
import { useAuthContext } from '../hooks/useAuthContext'
const Home = () => {

    const { workouts, dispatch } = useEquipmentsContext()
    const { user } = useAuthContext()

    useEffect(() => {
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
export default Home;