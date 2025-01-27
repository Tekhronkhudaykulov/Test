import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../src/store/store';
import { AdminLogin } from './components/AdminLogin';
import { CommandInput } from './components/CommandInput';
import { ManipulatorGrid } from './components/ManipulatorGrid';
import { CommandHistory } from './components/CommandHistory';
import { SnackbarAlert } from './components/SnackbarAlert';
import { closeSnackbar } from './store/slices/snackBarSlice';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const { isOpen, message, severity } = useSelector((state:RootState) => state.snackBar)
  const dispatch = useDispatch()

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {!isAuthenticated ? (
        <AdminLogin />
      ) : (
        <>
          <CommandInput />
          <ManipulatorGrid />
          <CommandHistory />
          <SnackbarAlert
            severity={severity}
            open={isOpen}
            message={message}
            onClose={() => dispatch(closeSnackbar())}
          />
        </>
      )}
    </div>
  );
};

export default App;
