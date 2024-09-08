import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  onClick: Dispatch<SetStateAction<boolean>>
}

export const BookButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
      >
        <Button component="button" onClick={() => onClick(true)}>Open modal</Button>
      </BottomNavigation>
    </Paper>
  );
};
