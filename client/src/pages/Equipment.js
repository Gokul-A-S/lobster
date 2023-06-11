import { useLocation } from "react-router-dom";
import moment from 'moment';
const Equipment = () => {
    const eqp = useLocation().state.workout
    //console.log(eqp)
    const purchaseDate = moment(eqp.dop).format('DD-MM-YYYY')
    const warrantyDate = moment(eqp.warranty).format('DD-MM-YYYY')
    return (
        <div className="equipment-view">
            <div className="image">
                <img src={''} alt="equipment" /></div>
            <div className="info">
                <h2>Name: <span className="value">{eqp.name}</span></h2>
                <h2>Type: <span className="value">{eqp.type}</span></h2>
                <h2>Brand: <span className="value">{eqp.brand}</span></h2>
                <h2>Purchase Date: <span className="value">{purchaseDate}</span></h2>
                <h2>Warranty: <span className="value">{warrantyDate}</span></h2>
                <h2>Condition: <span className="value">{eqp.condition}</span></h2>
                <h2>Location: <span className="value">{eqp.location}</span></h2>
                <h2>Lab: <span className="value">{eqp.lab}</span></h2>

            </div>
        </div>

    )
}
export default Equipment