import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TopCard } from './TopCard.tsx';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { blue, green, orange, red } from '@mui/material/colors';

const topCardsData = [
  {
    id: 1,
    icon: <PieChartOutlinedIcon
      sx={{
        width: '38px',
        height: '38px',
        color: 'white',
        strokeWidth: 2,
      }}
    />,
    count: '250k',
    title: 'Sales',
    color: red[500]
  },
  {
    id: 2,
    icon: <SentimentSatisfiedOutlinedIcon
      sx={{
        width: '38px',
        height: '38px',
        color: 'white',
        strokeWidth: 2,
      }}
    />,
    count: '24m',
    title: 'Customers',
    color: orange[500],
  },
  {
    id: 3,
    icon: <Inventory2OutlinedIcon
      sx={{
        width: '38px',
        height: '38px',
        color: 'white',
        strokeWidth: 2,
      }}
    />,
    count: '15k',
    title: 'Products',
    color: blue[500]
  },
  {
    id: 4,
    icon: <LocalMallOutlinedIcon
      sx={{
        width: '38px',
        height: '38px',
        color: 'white',
        strokeWidth: 2,
      }}
    />,
    count: '180m',
    title: 'Revenue',
    color: green[500]
  },
];

export const TopCards = () => {
  return (
    <Box component="section">
      <Grid
        container
        spacing={2}
      >
        {topCardsData.map((data) => <TopCard key={data.id} data={data} />)}
      </Grid>
    </Box>
  );
};
