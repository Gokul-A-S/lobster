import { useLocation } from "react-router-dom"
const LabView = () => {
    const lab=useLocation().state.labs
    return (
        <div className="lab">
            <h1 className="heading">Lab Details</h1>
            <div className="info">
                <h2>Name <span className="value">{lab.name}</span> </h2>
                <h2>Code <span className="value">{lab.code}</span> </h2>
                <h2>Faculty <span className="value">{lab.fic}</span> </h2>    
            </div>
            
            

        </div>
    )
}
export default LabView