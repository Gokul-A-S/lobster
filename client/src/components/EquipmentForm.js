import { useState } from "react"
import { useEquipmentsContext } from "../hooks/useEquipmentContext"
import { useAuthContext } from "../hooks/useAuthContext"

const EquipmentForm = () => {
    const { dispatch } = useEquipmentsContext()
    const {user}=useAuthContext()
    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [brand, setBrand] = useState('')
    const [dop, setDOP] = useState('')
    const [warranty, setWarranty] = useState('')
    const [condition, setCondition] = useState('')
    const [location, setLocation] = useState('')
    const [lab, setLab] = useState('')
    const [error, setError] = useState(null)

    const handleSumbit = async (e) => {
        e.preventDefault()
        if(!user){
            setError("Authorization Required")
            return
        }
        const equipment = { id, name, type, brand, dop, warranty, condition, location, lab }
        const response = await fetch('http://localhost:4096/api/equipments', {
            method: 'POST',
            body: JSON.stringify(equipment),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`

            }
        })
        const json = await response.json()
        if (!response.status !== 200) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setID('')
            setType('')
            setBrand('')
            setDOP('')
            setWarranty('')
            setCondition('')
            setLocation('')
            setLab('')
            setError(null)
            console.log("Add Successful")
            dispatch({ type: 'CREATE_EQP', payload: json })
        }
    }
    return (
        <div className="workout-form">
            <form className="create" onSubmit={handleSumbit}>
                <h3>Add New Equipment</h3>
                <label>Equipment Name:</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <label>ID</label>
                <input type="text" required value={id} onChange={(e) => setID(e.target.value)} />
                <label>Brand</label>
                <input type="text" required value={brand} onChange={(e) => setBrand(e.target.value)} />
                <label>Type:</label>
                <input type="text" required value={type} onChange={(e) => setType(e.target.value)} />
                <label>Purchase</label>
                <input type="date" required value={dop} onChange={(e) => setDOP(e.target.value)} />
                <label>Warranty</label>
                <input type="date" required value={warranty} onChange={(e) => setWarranty(e.target.value)} />
                <label>Condition</label>
                <input type="text" required value={condition} onChange={(e) => setCondition(e.target.value)} />
                <label>Location</label>
                <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />
                <label>Lab</label>
                <input type="text" required value={lab} onChange={(e) => setLab(e.target.value)} />
                <button>Add Equipment</button>
                {error && <div className="error"><p>{error}</p>
                </div>}
            </form>
        </div>
    )
}
export default EquipmentForm;