import { useEquipmentsContext } from "../hooks/useEquipmentContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns'
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const WorkoutDetails = ({ workout,labs }) => {
    const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('Working')
    const {user} =useAuthContext()
    const [allocated, setAllocated] = useState(false)
    const { dispatch } = useEquipmentsContext()
   
    const handleClick = async (e) => {
        e.preventDefault()
        if (window.confirm("Are you sure you want to delete this equipment?")) {
            if (!user) {
                console.log("Authorization Required")
                return
            }
            const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/equipments/${workout._id}`, {
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
        else {
            return
        }

    }
    const allocate = async (e) => {
        setAllocated(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/equipments/${workout._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },

                body: JSON.stringify({ lab: selectedOption })

            })
            const json = await response.json()
            if (response.ok) {
                console.log('Allocation Successful')
                if (window.location.pathname === '/lab') {
                    navigate(`/main`, { state: { eqp: json } })
                    console.log(json)
                }
                else {
                    navigate(`/main`)
                }
            }
            if (!response.ok) {
                console.log(json)
            }

        }
        catch (error) {
            console.log(error.message)
        }
    }
    //
    const gotoEquipment = () => {

        if (allocated) {
            workout.lab = selectedOption
        }
        navigate(`/equipment`, { state: { workout } })
        //
    }


    const update = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/equipments/${workout._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },body: JSON.stringify({ condition: selectedStatus })
            })
            const json = await response.json()
            if (response.ok) {
                console.log('Update Successful')

            }
            if (!response.ok) {
                console.log(json)
            }

        }
        catch (error) {
            console.log(error.message)
        }
    }


    return (

        <div className="workout-details">
            <h4>{workout.name}</h4>
            <p><strong>Purchase:&nbsp;</strong>{format(new Date(workout.dop), 'dd-MM-yyyy')}</p>
            <p><strong>Type:&nbsp;</strong>{workout.type}</p>
            <p><strong>Condition:&nbsp;</strong>{workout.condition}</p>
            <p><strong>ID:&nbsp;</strong>{workout.id}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
            <div className="lab-list">
                <p><strong>Update:</strong></p>
                <select value={selectedStatus} onChange={(e) => { setSelectedStatus(e.target.value) }}>
                    <option value="Working">Working</option>
                    <option value="Not Working">Not Working</option>
                    <option value="Under Repair">Under Repair</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
                <p><strong>Transfer:</strong></p>
                <select value={selectedOption} onChange={(e) => { setSelectedOption(e.target.value) }}>
                    <option value=''>None</option>
                    {labs.map((lab) => (
                        <option key={lab._id} value={lab.code}>{lab.code}</option>
                    ))}
                </select>
                <button onClick={gotoEquipment}>Details</button>
                <button onClick={update}>Update</button>
                <button onClick={allocate}>Allocate</button>
            </div>
        </div>
    )
}
export default WorkoutDetails;