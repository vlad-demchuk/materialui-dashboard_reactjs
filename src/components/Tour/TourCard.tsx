import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Tour } from './TourList.tsx';
import { Link } from 'react-router-dom';

interface Props {
  tour: Tour,
}

export const TourCard = ({ tour }: Props) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      xl={3}
    >
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
            component={Link}
            variant="subtitle1"
            to={`tours/${tour.id}`}
            sx={{ textDecoration: 'none', color: 'secondary.main', '&:hover': { color: 'primary.main' } }}
          >
            {tour.name}
          </Typography>

          <Box
            component="div"
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
    </Grid>
  );
};
