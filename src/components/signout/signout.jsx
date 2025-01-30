import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../fbConfig';
import { Container, Button, Typography } from '@mui/material';

const Signout = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('You have been logged out.');
      navigate('/login', { replace: true });  // ✅ Ensures navigation happens after sign-out
    } catch (error) {
      console.error('Sign-out error:', error.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Sign Out</Typography>
      <Button variant="contained" color="secondary" onClick={handleSignOut}>Sign Out</Button>
    </Container>
  );
};

export default Signout;
