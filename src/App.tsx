import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../src/store/store';
import { AdminLogin } from './components/AdminLogin';
import { CommandInput } from './components/CommandInput';
import { ManipulatorGrid } from './components/ManipulatorGrid';
import { CommandHistory } from './components/CommandHistory';
import { SnackbarAlert } from './components/SnackbarAlert';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // const handleComplete = () => {
  //   setSnackbarOpen(true);
  // };

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
            open={snackbarOpen}
            onClose={() => setSnackbarOpen(false)}
            message="Operatsiya muvaffaqiyatli bajarildi!"
          />
        </>
      )}
    </div>
  );
};

export default App;
