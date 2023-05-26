import { useEffect } from "react";
import EquipmentDetails from "../components/EquipmentDetails";
import EquipmentForm from "../components/EquipmentForm";
import { useEquipmentsContext } from "../hooks/useEquipmentContext";
const Home = () => {

    const { workouts, dispatch } = useEquipmentsContext()

    useEffect(() => {
        const getWorkouts = async () => {
            try {
                const response = await fetch('http://localhost:4096/api/equipments')
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
        getWorkouts()


    }, [dispatch])

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