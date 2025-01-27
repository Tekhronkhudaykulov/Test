import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface SnackbarAlertProps {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: string
}

export const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ open, onClose, message,severity }) => {
  return (
    <Snackbar open={open} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} 
      // @ts-ignore
      severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
