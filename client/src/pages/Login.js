const Login=()=>{
    return(    
            <form className="login">
            <h1>Login</h1>
                <label>ID:</label>
                <input type="text" required/>
                <label>Password:</label>
                <input type="password" required/>
                <button type="submit">Login</button>
            </form>
        
    )
}
export default Login;