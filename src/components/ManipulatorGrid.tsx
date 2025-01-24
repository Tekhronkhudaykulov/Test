import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Box } from '@mui/material';

const CELL_SIZE = 50;

export const ManipulatorGrid: React.FC = () => {
  const grid = useSelector((state: RootState) => state.manipulator.grid);
  const commands = useSelector((state: RootState) => state.manipulator.commands);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= commands.length) {
        clearInterval(interval);
        return;
      }

      const command = commands[index];
      setPosition((prev) => {
        switch (command) {
          case 'Л':
            return { ...prev, x: Math.max(prev.x - 1, 0) };
          case 'П':
            return { ...prev, x: Math.min(prev.x + 1, grid[0].length - 1) };
          case 'Н':
            return { ...prev, y: Math.max(prev.y - 1, 0) };
          case 'В':
            return { ...prev, y: Math.min(prev.y + 1, grid.length - 1) };
          default:
            return prev;
        }
      });

      index++;
    }, 500);

    return () => clearInterval(interval);
  }, [commands, grid]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${grid[0].length}, ${CELL_SIZE}px)`,
        gridTemplateRows: `repeat(${grid.length}, ${CELL_SIZE}px)`,
        gap: '2px',
        margin: '20px auto',
        maxWidth: `${CELL_SIZE * grid[0].length}px`,
      }}
    >
      {grid.map((row: any, rowIndex: any) =>
        row.map((_: any, colIndex: any) => (
          <Box
            key={`${rowIndex}-${colIndex}`}
            sx={{
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
              backgroundColor:
                position.x === colIndex && position.y === rowIndex
                  ? 'blue'
                  : 'lightgray',
              border: '1px solid black',
            }}
          />
        ))
      )}
    </Box>
  );
};
