import { useEquipmentsContext } from "../hooks/useEquipmentContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from "../hooks/useAuthContext"
import { useLabContext } from "../hooks/useLabContext"
import { useState } from "react"
const WorkoutDetails = ({ workout }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const { dispatch } = useEquipmentsContext()
    const { user } = useAuthContext()
    const { labs } = useLabContext()
    const handleClick = async () => {
        if (!user) {
            console.log("Authorization Required")
            return
        }
        const response = await fetch(`http://localhost:4096/api/equipments/${workout._id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_EQP', payload: json })
        }

    }
    const allocate = async (e) => {
        console.log(selectedOption)
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
            <div className="lab-list">
                <p><strong>Select a Lab Code:</strong></p>
                <select value={selectedOption} onChange={(e) => { setSelectedOption(e.target.value) }}>
                    <option value="">Select Lab</option>
                    {labs.map((lab) => (
                        <option key={lab._id} value={lab.code}>{lab.code}</option>
                    ))}
                </select>
                <button onClick={allocate}>Allocate</button>
            </div>
        </div>
    )
}
export default WorkoutDetails;