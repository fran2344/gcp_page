import React from 'react';
import handleSignIn from '../../feature/auth';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Login = () => {

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" />
      </Stack>
      <button
        onClick={handleSignIn}
      >Iniciar sesión con Google</button>
    </div>
  );
};

export default Login;
