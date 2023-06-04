import { useEffect } from "react"
import { useLabContext } from "../hooks/useLabContext"
import LabDetails from "../components/LabDetails"
import LabForm from "../components/LabForm"
import { useAuthContext } from '../hooks/useAuthContext'
const Lab = () => {
    const { labs, dispatch } = useLabContext()
    const { user } = useAuthContext()
    useEffect(() => {
        const getLabs = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/labs`,{
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

    },[dispatch,user])
    
    return (<div className="home">
        <div className="workouts">
            {labs && labs.map((labs, index) => (
                <div key={index}>
                    <LabDetails labs={labs} key={labs._id} />
                </div>))}
        </div>
        <LabForm/>
    </div>)
}
export default Lab