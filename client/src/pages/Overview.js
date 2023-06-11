import { useEffect,useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
const Overview = () => {
    const { user } = useAuthContext()
    const [stats, setStats] = useState({})
    useEffect(() => {
        const getStats = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/reports`,{
                    headers:{
                        'Authorization': `Bearer ${user.token}`,
                    }
                })
                const data = await response.json()
                console.log(data)
                setStats(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getStats()
    }, [user])

return (
    <div>
        <h1>Overview</h1>
        <div className='overview'>
            <div className='overview-item'>
                <h2>Total Equipments</h2>
                <h3>{stats.totalCount}</h3>
                <h2>Total Working</h2>
                <h3>{stats.totalWorking}</h3>
                <h2>Total Labs</h2>
                <h3>{stats.totalLabs}</h3>
                </div>
            </div>
    </div>
)
}
export default Overview