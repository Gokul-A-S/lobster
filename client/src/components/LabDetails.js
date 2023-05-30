import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useLabContext } from '../hooks/useLabContext'
import { useAuthContext } from '../hooks/useAuthContext'
const LabDetails = ({ labs }) => {
    const { user } = useAuthContext()
    const { dispatch } = useLabContext()
    const handleClick = async () => {
        try {
            if(!user){
                console.log("Authorization required")
                return
            }
            const response = await fetch(`http://localhost:4096/api/labs/${labs._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                }
            })
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'DELETE_LAB', payload: json })
            }
            else {
                console.log(json)
            }
        }
        catch (error) {
            console.log(error.message)
        }


    }
    return (
        <div className="workout-details">
            <h4>{labs.name}</h4>
            <p><strong>ID:</strong>{labs.code}</p>
            <p><strong>Faculty:</strong>{labs.fic}</p>
            <p>{formatDistanceToNow(new Date(labs.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}
export default LabDetails;