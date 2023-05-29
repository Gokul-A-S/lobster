import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const LabDetails=({labs})=>{
    const handleClick = async () => {
        
    }
    return (
<div className="workout-details">
            <h4>{labs.name}</h4>
            <p><strong>ID:</strong>{labs.code}</p>
            <p><strong>Faculty:</strong>{labs.fic}</p>
            <p>{formatDistanceToNow(new Date(labs.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}
export default LabDetails;