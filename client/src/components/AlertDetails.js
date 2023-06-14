import logo from '../logo.png'
const AlertDetails = ({alerts}) => {
    return (
        <div className="computer-logo">
                    <div className="lab-computer">
                        <img src={logo} alt="equipment" /></div>
                    <div className="info">
                        <h2>Name: <span className="value">{alerts.name}</span></h2>
                        <h2>Type: <span className="value">{alerts.type}</span></h2>
                        <h2>Brand: <span className="value">{alerts.brand}</span></h2>
                        <h2>Date of Purchase: <span className="value">{alerts.dop}</span></h2>
                        <h2>Warranty: <span className="value">{alerts.warranty}</span></h2>
                        <h2>Condition: <span className="value">{alerts.condition}</span></h2>
                        <h2>Lab: <span className="value">{alerts.lab}</span></h2>
        
                    </div>
                </div>
      );
}
 
export default AlertDetails;