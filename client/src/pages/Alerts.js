import React, { useEffect } from 'react'

function Alerts() {

    const [alerts,setAlerts]=useState([])
    
    return (
                <div className="equipment-view">
                    <div className="image">
                        <img src={''} alt="equipment" /></div>
                    <div className="info">
                        <h2>Name: <span className="value">{eqp.name}</span></h2>
                        <h2>Type: <span className="value">{eqp.type}</span></h2>
                        <h2>Brand: <span className="value">{eqp.brand}</span></h2>
                        <h2>Date of Purchase: <span className="value">{eqp.dop}</span></h2>
                        <h2>Warranty: <span className="value">{eqp.warranty}</span></h2>
                        <h2>Condition: <span className="value">{eqp.condition}</span></h2>
                        <h2>Location: <span className="value">{eqp.location}</span></h2>
                        <h2>Lab: <span className="value">{eqp.lab}</span></h2>
        
                    </div>
                </div>
        
            );
}

export default Alerts

