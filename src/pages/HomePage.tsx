import Typography from '@mui/material/Typography';
import { TopCards } from '../components/Dashboard/TopCards.tsx';

export const HomePage = () => {
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        marginBottom={2}
      >
        Dashboard
      </Typography>

      <TopCards />
    </>
  );
};
