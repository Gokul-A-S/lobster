import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import Select from 'react-select'
const Reports = () => {
    const [equipments, setEquipments] = useState([])
    const [selectedOptions, setSelectedOptions] = useState([])
    const { user } = useAuthContext()
    useEffect(() => {
        const getEquipments = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/equipments`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                const json = await response.json()
                if (response.ok) {
                    setEquipments(json)
                }
                if (!response.ok) {
                    console.log(json)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getEquipments()

    }, [user])
    const handleSelectChange = (selected) => {
        setSelectedOptions(selected);
    };
    const customOptionLabel = ({ label, description }) => (
        <div>
            <span>{label}</span>
            <span className="option-description">{description}</span>
        </div>
    );
    const options = equipments.map((equipment) => ({
        value: equipment._id,
        label: equipment.name,
        description: equipment.code,
    }));
    const generateReport = async () => {
        console.log(selectedOptions)
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/api/reports`, {
                method: "POST",
                body: JSON.stringify(selectedOptions),
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${user.token}`,
                },
            })
            const data = await response.json()
            console.log(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <h1>Reports</h1>
            <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleSelectChange}
                getOptionLabel={customOptionLabel}
            />
            <button onClick={generateReport}>Generate Report</button>
        </div>
    )
}
export default Reports;