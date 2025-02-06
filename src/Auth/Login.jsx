import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { TextField, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux Toolkit/Slice/AuthSlice';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// Styled components using Material-UI's styled API
const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
  background: 'url( https://source.unsplash.com/random/1600x900 ) no-repeat center center fixed',
  backgroundSize: 'cover',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '10px',
  padding: '30px',
  width: '400px',
  backdropFilter: 'blur(10px)', // Add blur effect to make it look like frosted glass
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    navigate("/list");
  };

  return (
    <Root>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, color: 'Red' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              required
            />
            <StyledButton type="submit" variant="contained">Log In</StyledButton>
          </form>
        </CardContent>
      </StyledCard>
    </Root>
    
      // <SignedIn>
      //   <UserButton />
      // </SignedIn>
  );
};

export default Login;