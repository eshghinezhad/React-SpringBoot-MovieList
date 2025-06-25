import React, { useState } from "react";
import { Box, TextField, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';
import Header from '../components/Header';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    
  }

  return (
    <div>
      <Header />
      <Box 
        sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh', 
            backgroundColor: '#f5f5f5', 
            padding: '20px' 
        }}
      >
        <Typography variant="h4" gutterBottom>
            Sign Up
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
            <TextField 
                required
                label="First Name" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <TextField 
                required
                label="Last Name" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
            />
            <TextField 
                required
                label="Email" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                value={email} 
                inputProps={{pattern:"\\w+@\\w+\\.com"}}
                onChange={(e) => setEmail(e.target.value)} 
            />
            {message}
            <TextField 
                required
                label="Password" 
                type="password" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <FormControlLabel 
                required
                control={
                    <Checkbox 
                        checked={termsAccepted} 
                        onChange={(e) => setTermsAccepted(e.target.checked)} 
                    />
                } 
                label="I accept the terms and conditions" 
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ marginTop: '20px' }}
            >
                Sign Up
            </Button>
        </form>
      </Box>
      <footer />
    </div>
  );
}

export default SignUp;
