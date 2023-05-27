import { useState } from "react"
const Register=()=>{
    const [id,setId]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=async (e)=>{
        e.preventDeafault()
        console.log(id,password)
    }
    return(
        
            <form className="register" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label>ID:</label>
                <input type="text" onChange={(e)=>setId(e.target.value)} value={id}/>
                <label>Password:</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button type="submit">Register</button>
            </form>
       
    )
}

export default Register