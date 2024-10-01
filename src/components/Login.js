// import React, { useState } from 'react';
// import { TextField, Button, Typography, Container } from '@mui/material';

// const Login = ({ handleLogin }) => {
//     const [credentials, setCredentials] = useState({ username: '', password: '' });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCredentials({ ...credentials, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleLogin(credentials.username, credentials.password);
//     };

//     return (
//         <Container maxWidth="xs">
//             <Typography variant="h4" gutterBottom>Login</Typography>
//             <form onSubmit={handleSubmit}>
//                 <TextField 
//                     label="Username" 
//                     variant="outlined" 
//                     fullWidth 
//                     margin="normal" 
//                     name="username"
//                     value={credentials.username}
//                     onChange={handleChange}
//                     required 
//                 />
//                 <TextField 
//                     label="Password" 
//                     type="password"
//                     variant="outlined" 
//                     fullWidth 
//                     margin="normal" 
//                     name="password"
//                     value={credentials.password}
//                     onChange={handleChange}
//                     required 
//                 />
//                 <Button type="submit" variant="contained" color="primary" fullWidth>
//                     Login
//                 </Button>
//             </form>
//         </Container>
//     );
// };

// export default Login;

import React from 'react';
import './LoginPage.css';
import { FaUser,FaLock } from "react-icons/fa";
const LoginPage = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1> Login </h1>
                <div class="dropdown">
    <button class="dropbtn">Select Role <span class="arrow">▼</span></button>
    <div class="dropdown-content">
        <a href="#">Educator</a>
        <a href="#">Student</a>
    </div>
</div>
                <div className = "input-box">
                <i class="fa fa-user icon"></i>
                    <input type = "text" placeholder = 'Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className = "input-box">
                <i class="fa fa-lock icon"></i>
                    <input type = "password" placeholder = 'Password' required />
                    <FaLock className='icon' />
                </div>
                <div className = "remember-forgot"> 
                    <label>
                        <input type = "checkbox"/> Remember me
                    </label>
                   < a href ="#"> Forgot Password ?</a>
                </div>
                <button type = " submit" > Login  </button>
                <div className="registerlink">
                    <p> Don't have an account? <a href = "#"> Register </a></p>
                </div>
            </form>
             </div>
    );
};
export default LoginPage;
