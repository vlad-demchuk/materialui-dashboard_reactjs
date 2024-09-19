import Typography from '@mui/material/Typography';
import { TopCards } from '../components/Dashboard/TopCards.tsx';
import { Table } from '../components/Dashboard/Table.tsx';
import Box from '@mui/material/Box';

export const HomePage = () => {
  return (
    <Box component="section">
      <Typography
        variant="h3"
        component="h2"
        mb={3}
      >
        Dashboard
      </Typography>

      <TopCards />

      <Table />
    </Box>
  );
};
