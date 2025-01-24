import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';

export const CommandHistory: React.FC = () => {
  const {history} = useSelector((state: RootState) => state.manipulator);

  

  

  return (
    <Box sx={{ marginTop: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Оригинал</TableCell>
            <TableCell>Оптимизированный</TableCell>
            <TableCell>Дата и время</TableCell>
            <TableCell>Grid (до)</TableCell>
            <TableCell>Grid (после)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((item:any, index:any) => (
            <TableRow key={index}>
              <TableCell>{item.original}</TableCell>
              <TableCell>{item.optimized}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                {item.gridBefore.map((row:any) => row.join(', ')).join(' | ')}
              </TableCell>
              <TableCell>
                {item.gridAfter.map((row:any) => row.join(', ')).join(' | ')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
