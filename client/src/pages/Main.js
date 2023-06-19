import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EquipmentDetails from "../components/EquipmentDetails";
import EquipmentForm from "../components/EquipmentForm";
import { useEquipmentsContext } from "../hooks/useEquipmentContext";
import { useAuthContext } from '../hooks/useAuthContext'
const Home = () => {
    const eqpCopy = useLocation().state?.eqp
    const { workouts, dispatch } = useEquipmentsContext()
    const { user } = useAuthContext()
    const [search, setSearch] = useState(workouts)
    useEffect(() => {

        const getWorkouts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/equipments`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SET_EQP', payload: json })
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


    }, [dispatch, user])
    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/equipments/search`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ name: e.target.value })
            })
            const json = await response.json()
            if (response.ok) {
                console.log(json)
                setSearch(json)
            }
            else {
                console.log(json)
            }
        }
        catch (error) {
            console.log(error.message)
        }

    }
    const handleReset = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/equipments`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                },
                method: 'GET'
            })
            const json = await response.json()
            if (response.ok) {
                console.log(json)
                setSearch(json)
            }
            else {
                console.log(json)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }
    if (!eqpCopy) {
        return (
            <div className="home">
                <div className="workouts">
                    <div class="search-container">
                        <div class="search">
                            <input class="search-field" onChange={handleSearch} type="text" placeholder="Search" />
                        </div>
                            <button onClick={handleReset} class="reset-btn">Reset</button>
                        
                    </div>
                        {search && search.map((workout, index) => (
                            <div key={index}>
                                <EquipmentDetails workout={workout} key={workout._id} />
                            </div>
                        ))
                        }
                    </div>
                    <EquipmentForm />
                </div>
                )
    }
                else {
        return (
                <div className="home">
                    <div className="workouts">
                        {eqpCopy && eqpCopy.map((eqpCopy, index) => (
                            <div key={index}>
                                <EquipmentDetails workout={eqpCopy} key={eqpCopy._id} />
                            </div>
                        ))
                        }
                    </div>
                    <EquipmentForm />
                </div>
                )
    }
}

                export default Home;