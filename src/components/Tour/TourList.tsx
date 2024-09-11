import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TourCard } from './TourCard.tsx';
import destinations from '../../data/tours.json';

// Define a type for the "Tour" object
export interface Tour {
  id: number;
  name: string;
  duration: number; // in hours
  rating: number;
  numberOfReviews: number;
  price: number; // in currency
  image: string; // URL string for the image
}

// Define a type for the "Destination" object, which contains multiple tours
export interface Destination {
  id: number;
  name: string;
  tours: Tour[]; // Array of "Tour" objects
}

export const TourList = () => {
  const destinationsList: Destination[] = destinations;

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}
      component="section"
    >
      {destinationsList.map((destination) => (
        <Box
          key={destination.id}
          component="article"
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
          >
            {destination.name}
          </Typography>

          <Grid
            container
            spacing={2}
          >
            {destination.tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
