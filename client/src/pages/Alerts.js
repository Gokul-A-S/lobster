<<<<<<< HEAD
=======
import React,{useEffect,useState} from 'react'
import AlertDetails from '../components/AlertDetails'
const Alerts=()=>{
    const [alerts,setAlerts]=useState([])
    useEffect(()=>{
        const getAlerts=async()=>{
            try{
                const response=await fetch(`${process.env.REACT_APP_SERVER_URI}/api/alerts`)
                const json=await response.json()
                if (response.ok){
                    setAlerts(json)
                    console.log(json)
                }
                if(!response.ok){
                    console.log(json)
                }
            }
            catch(error){
                console.log(error.message)
            }
        }
        getAlerts()
    },[])
    return(
        <div>
            <h1>Alerts</h1>
            {alerts && alerts.map((alerts,index)=>(
                <div key={index}>
                    <AlertDetails alerts={alerts} key={alerts._id} />
                </div>
            )
            )}
        </div>
    )
}
export default Alerts
>>>>>>> 071e58c (Added Alerts page and AlertDetails page)
