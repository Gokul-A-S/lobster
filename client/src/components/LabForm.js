import { useState } from "react";
import { useLabContext } from "../hooks/useLabContext";
import {useAuthContext} from "../hooks/useAuthContext";
import { useEffect } from "react";

const LabForm = () => {
    const { user } = useAuthContext();
    const { dispatch } = useLabContext();
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [fic, setFic] = useState("");
    const [error, setError] = useState(null);
    useEffect(() => {
        const getWorkouts = async () => {
            try {
                const response = await fetch(`${process.env.SERVER_URI}/api/equipments`, {
                    headers:{
                        'Authorization':`Bearer ${user.token}`
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
        else{
            console.log("Authorization required")
        }


    }, [dispatch,user])

    const handleSumbit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError("Authorization Required");
            return;
        }
        const lab = { code, name, fic };
        const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/labs`, {
            method: "POST",
            body: JSON.stringify(lab),
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${user.token}`,
            },  
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setName("");
            setCode("");
            setFic("");
            setError(null);
            console.log("Add Successful");
            dispatch({ type: "CREATE_LAB", payload: json });
        }
    }
    return(
        <div className="workout-form">
            <form className="create" onSubmit={handleSumbit}>
                <h3>Add New Lab</h3>
                <label>Lab Name:</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <label>Lab Code</label>
                <input type="text" required value={code} onChange={(e) => setCode(e.target.value)} />
                <label>Faculty In Charge</label>
                <input type="text" required value={fic} onChange={(e) => setFic(e.target.value)} />
                <button>Add Lab</button>
                {error && <span className="error">{error}</span>}
            </form>
        </div>
    )
}
export default LabForm;