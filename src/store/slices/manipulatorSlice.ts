import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ManipulatorState {
  commands: string[];
  optimizedCommands: string;
  grid: number[][];
  history: Array<{
    original: string;
    optimized: string;
    date: string;
    gridBefore: number[][];
    gridAfter: number[][];
  }>;
}

const initialState: ManipulatorState = {
  commands: [],
  optimizedCommands: '',
  grid: Array(5).fill(0).map(() => Array(5).fill(0)),
  history: [],
};

const manipulatorSlice = createSlice({
  name: 'manipulator',
  initialState,
  reducers: {
    setCommands: (state, action: PayloadAction<string[]>) => {
      state.commands = action.payload;
    },
    setOptimizedCommands: (state, action: PayloadAction<string>) => {
      state.optimizedCommands = action.payload;
    },
    updateGrid: (state, action: PayloadAction<number[][]>) => {
      state.grid = action.payload;
    },
    addHistory: (
      state,
      action: PayloadAction<{
        original: string;
        optimized: string;
        date: string;
        gridBefore: number[][];
        gridAfter: number[][];
      }>
    ) => {
      state.history.push(action.payload);
    },
  },
});

export const { setCommands, setOptimizedCommands, updateGrid, addHistory } =
  manipulatorSlice.actions;
export default manipulatorSlice.reducer;
