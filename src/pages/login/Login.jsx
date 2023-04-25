import React, { useState } from 'react';
import "./Login.css"
function Login( props) {
    const [username, setUsername] = useState( '' );
    const [password, setPassword] = useState( '' );
    const {handleLogin} = props
  

    const handleUsernameChange = ( event ) => {
        setUsername( event.target.value );
    };

    const handlePasswordChange = ( event ) => {
        setPassword( event.target.value );
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        handleLogin( username, password )
    }

    return (
        <div>
            <h1>Login</h1>
            <form >
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button onClick={handleSubmit}>Login</button>
            </form>
            {/* <button onClick={handleNavigate}>Go Back</button> */}
        </div>
    );
}

export default Login
