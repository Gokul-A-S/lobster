import { useEffect } from "react"
import { useLabContext } from "../hooks/useLabContext"
import LabDetails from "../components/LabDetails"
const Lab = () => {
    const { labs, dispatch } = useLabContext()

    useEffect(() => {
        const getLabs = async () => {
            try {
                const response = await fetch('http://localhost:4096/api/labs')
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
        getLabs()
    },[dispatch])
    
    return (<div className="home">
        <div className="workouts">
            {labs && labs.map((labs, index) => (
                <div key={index}>
                    <LabDetails labs={labs} key={labs._id} />
                </div>))}
        </div>
    </div>)
}
export default Lab