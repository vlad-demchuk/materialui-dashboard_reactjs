import { Link, useParams } from 'react-router-dom';
import destinations from '../../data/tours.json';
import { Destination } from './TourList.tsx';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ImageCollage } from './ImageCollage.tsx';
import lasVegasImg from '../../assets/img.png';
import { FAQAccordion } from './FAQAccordion.tsx';
import { useState } from 'react';
import { BookButton } from './BookButton.tsx';
import { BookModal } from './BookModal.tsx';

export const TourDetails = () => {
  const { tourId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedTourId = tourId ? +tourId : 0;
  const destinationsList: Destination[] = destinations;
  const toursList = destinationsList.flatMap(destination => destination.tours);
  const selectedTour = toursList.find(tour => tour.id === +selectedTourId);

  return (
    <Container component="article">
      <Box>
        <Link to="..">Back</Link>
      </Box>

      <Typography
        component="h2"
        variant="h5"
      >
        {selectedTour?.name}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          }
        }}
        component="section"
      >
        <img
          src={lasVegasImg}
          alt="Las Vegas"
          style={{
            width: '600px',
            height: '300px',
          }}
        />

        <ImageCollage />
      </Box>

      <Box component="section">
        <Typography
          variant="h6"
          component="h6"
          marginTop={3}
        >
          About this ticket
        </Typography>
        <Typography
          variant="body1"
          component="p"
          marginTop={3}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto est, excepturi iure iusto laborum officiis quas quia quos, saepe tempore vitae! Culpa impedit inventore perferendis voluptate! Aspernatur, assumenda beatae cumque dignissimos exercitationem facere iste libero neque nisi sit unde.
        </Typography>
      </Box>

      <Box component="section" marginBottom={6}>
        <Typography
          variant="h5"
          component="h2"
          marginY={3}

        >
          FAQ
        </Typography>

        <FAQAccordion />
      </Box>

      <BookButton onClick={setIsModalOpen} />
      <BookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
};
