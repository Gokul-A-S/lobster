import { useEquipmentsContext } from "../hooks/useEquipmentContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useEquipmentsContext()
    const handleClick = async () => {
        const response = await fetch(`http://localhost:4096/api/equipments/${workout._id}`, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_EQP', payload: json })
        }

    }
    return (
        <div className="workout-details">
            <h4>{workout.name}</h4>
            <p><strong>Purchase:</strong>{workout.dop}</p>
            <p><strong>Type:</strong>{workout.type}</p>
            <p><strong>ID:</strong>{workout.id}</p>
            <p><strong>Location:</strong>{workout.location}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}
export default WorkoutDetails;