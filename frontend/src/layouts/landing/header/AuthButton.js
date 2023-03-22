import React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { login, logout } from '../redux/actions/authActions';

const AuthButton = () => {
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const handleLogin = () => {
// 	dispatch(login());
//   };
// 
//   const handleLogout = () => {
// 	dispatch(logout());
//   };

  return (
	<Button variant="contained">
	  {'Login'}
	</Button>
  );
};

export default AuthButton;
