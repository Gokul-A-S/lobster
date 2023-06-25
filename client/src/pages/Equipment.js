import { useLocation } from "react-router-dom";
import { format } from 'date-fns'
const Equipment = () => {
    const eqp = useLocation().state.workout
    const purchaseDate = format(new Date(eqp.dop), 'dd-MM-yyyy')
    const warrantyDate = format(new Date(eqp.warranty), 'dd-MM-yyyy')
    return (
        <div className="equipment-view">
                <h1>{eqp.name}</h1>
            <div className="info">
                <h2>Type <span className="value">{eqp.type}</span></h2>
                <h2>Brand <span className="value">{eqp.brand}</span></h2>
                <h2>Purchase Date <span className="value">{purchaseDate}</span></h2>
                <h2>Warranty <span className="value">{warrantyDate}</span></h2>
                <h2>Condition <span className="value">{eqp.condition}</span></h2>
                <h2>Lab <span className="value">{eqp.lab}</span></h2>
                <h2>Processor <span className="value">{eqp.processor}</span></h2>
                <h2>Ram <span className="value">{eqp.ram}GB</span></h2>
                <h2>HDD <span className="value">{eqp.hdd}GB</span></h2>
            </div>
        </div>

    )
}
export default Equipment