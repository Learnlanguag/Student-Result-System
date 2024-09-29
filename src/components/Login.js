import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const Login = ({ handleLogin }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(credentials.username, credentials.password);
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" gutterBottom>Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Username" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required 
                />
                <TextField 
                    label="Password" 
                    type="password"
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required 
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;