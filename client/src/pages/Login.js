const Login=()=>{
    return(
        <div className="login">
            
            <form className="login-form">
            <h1>Login</h1>
                <label>Username</label>
                <input type="text" required/>
                <label>Password</label>
                <input type="password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;