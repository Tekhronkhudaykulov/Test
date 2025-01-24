import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import {login} from "../store/slices/authSlice"

export const AdminLogin: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: { username: string; password: string }) => {
    if (data.username === 'admin' && data.password === 'admin') {
      dispatch(login());
    } else {
      alert('Парол не правильный');
    }
  };

  return (
    <Box
      component="form"
      // @ts-ignore
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}
    >
      <TextField {...register('username')} label="Логин" fullWidth margin="normal" />
      <TextField
        {...register('password')}
        label="Парол"
        type="password"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" fullWidth>
        Войти
      </Button>
    </Box>
  );
};
