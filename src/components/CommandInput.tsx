import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addHistory, setCommands, setOptimizedCommands } from '../store/slices/manipulatorSlice';
import { applyCommandsToGrid, optimizeCommands } from '../utils/optimizeCommands';
import { Box, TextField, Button } from '@mui/material';
import { RootState } from '../store/store';

export const CommandInput: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const {grid} = useSelector((state: RootState) => state.manipulator);

  const onSubmit = (data: { commands: string }) => {
    const input = data.commands.trim();
    if (!input) return;

    const commands = input.split('');
      // @ts-ignore

    const optimized = optimizeCommands(commands);
    const date = new Date().toLocaleString();

    const gridBefore = JSON.parse(JSON.stringify(grid)); 
    const gridAfter = applyCommandsToGrid(grid, commands); 

    dispatch(setCommands(commands));
    dispatch(setOptimizedCommands(optimized));
    dispatch(
      addHistory({
        original: input,
        optimized,
        date,
        gridBefore,
        gridAfter,
      })
    );

    reset();
  };

  return (
      // @ts-ignore
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <TextField
        {...register('commands')}
        label="Команды"
        fullWidth
        placeholder="На пример: ЛЛННВППОБ"
      />
      <Button type="submit" variant="contained" sx={{ mt: 1 }}>
      Оптимизация и хранение
      </Button>
    </Box>
  );
};
