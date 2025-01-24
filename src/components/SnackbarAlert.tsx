import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface SnackbarAlertProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ open, onClose, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
