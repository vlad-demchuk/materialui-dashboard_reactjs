import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface TopCardData {
  id: number,
  count: string,
  title: string,
  icon: React.ReactElement,
  color: string
}

interface Props {
  data: TopCardData
}

export const TopCard: React.FC<Props> = ({ data }) => {
  return (
    <Grid
      xs={12}
      sm={6}
      md={3}
      xl={3}
      item
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 3,
        }}
      >
        <Box
          sx={{
            width: '60px',
            height: '60px',
            backgroundColor: data.color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            mr: 2,
          }}
        >
          {data?.icon}
        </Box>
        <Box>
          <Typography
            color={data.color}
            fontWeight="bold"
            fontSize={32}
            component="p"
          >{data.count}</Typography>
          <Typography component="h4">{data.title}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};
