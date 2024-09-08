import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';
import { Tour } from './TourList.tsx';
import { Link } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

interface Props {
  tour: Tour,
}

export const TourCard: React.FC<Props> = ({ tour }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      xl={3}
    >
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src={tour.image}
            alt="Image"
            style={{
              width: '100%',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              height: '5rem',
            }}
          />

          <Box paddingX={1}>
            <Typography
              component="h3"
              variant="subtitle1"
            >
              <Link to={`tours/${tour.id}`}>
                {tour.name}
              </Link>
            </Typography>

            <Box
              component="p"
              sx={{ display: 'flex', gap: 0.5, alignItems: 'center', marginY: '0', mt: 0.5, mb: 3 }}
            >
              <AccessTimeIcon sx={{ width: 16 }} />

              <Typography variant="body2">
                {`${tour.duration} hours`}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating
                name="half-rating-read"
                defaultValue={tour.rating}
                precision={0.5}
                readOnly
                size="small"
                sx={{ mr: 0.4 }}
              />
              <Typography
                component="span"
                variant="body2"
                sx={{ mr: 1 }}
              >4.5</Typography>
              <Typography
                component="span"
                variant="body3"
              >({`${tour.numberOfReviews} review${tour.numberOfReviews !== 1 ? 's' : ''}`})</Typography>
            </Box>

            <Typography
              component="h4"
              variant="h6"
            >
              From C {`$${tour.price}`}
            </Typography>

          </Box>

        </Paper>
      </ThemeProvider>

    </Grid>
  );
};
