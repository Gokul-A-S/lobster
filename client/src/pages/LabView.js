import { useLocation } from "react-router-dom"
const LabView = () => {
    const lab=useLocation().state.labs
    return (
        <div className="lab">
            <h1 className="heading">Lab Details</h1> <br />
            <div className="lab-details-container">
            <div className="lab-details">
                <h2>Name:</h2><span className="value">{lab.name}</span>
            </div>
            <div className="lab-details">
                <h2>Code: </h2><span className="value">{lab.code}</span>
            </div>
            <div className="lab-details">
                <h2>Faculty: </h2><span className="value">{lab.fic}</span>    
            </div>
            </div>
            
            

        </div>
    )
}
export default LabView