import { useEffect } from "react";
import WorkoutDetails from "../components/EquipmentDetails";
import WorkoutForm from "../components/EquipmentForm";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
const Home = () => {

   const {workouts,dispatch}=useWorkoutsContext()

    useEffect(() => {
        const getWorkouts = async () => {
            const response = await fetch('http://localhost:4096/api/equipments')
            const json = await response.json()

            if (response.ok) {
                dispatch({type:'SET_EQP',payload:json})
            }
            else {
                alert(json)
            }
        }
        getWorkouts()
        //console.log(workouts)

    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout,index) => (
                    <div key={index}>
                        <WorkoutDetails  workout={workout} key={workout._id}/>
                    </div>
                ))
                }
            </div>
            <WorkoutForm />
        </div>
    )
}
export default Home;