import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  onClick: Dispatch<SetStateAction<boolean>>
}

export const BookButton = ({ onClick }: Props) => {
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
