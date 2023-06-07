import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useLabContext } from '../hooks/useLabContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
const LabDetails = ({ labs }) => {
    const navigate = useNavigate()
    const { user } = useAuthContext()
    const { dispatch } = useLabContext()

    const handleClick = async () => {

        try {
            if (!user) {
                console.log("Authorization required")
                return
            }
            const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/labs/${labs._id}`, {
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
    const changePage = () => {
        const getWorkouts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/labs/filter/${labs.code}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                const json = await response.json()

                if (response.ok) {
                    if (window.location.pathname === '/lab') {
                        navigate(`/main`, { state: { eqp: json } })
                    }
                    else{
                        navigate(`/main`)
                    }

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
        else {
            console.log("Authorization required")
        }


    }
    const gotoLabs = () => {
        console.log(labs)
        navigate(`/lab/${labs._id}`, { state: { labs } })
    }
    return (
        <div className="workout-details">
            <h4>{labs.name}</h4>
            <p><strong>ID:</strong>{labs.code}</p>
            <p><strong>Faculty:</strong>{labs.fic}</p>
            <p>{formatDistanceToNow(new Date(labs.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
            <div>
                <button onClick={gotoLabs}>About </button>
                <button onClick={changePage}>Equipment</button>
            </div>
        </div>
    )
}
export default LabDetails;