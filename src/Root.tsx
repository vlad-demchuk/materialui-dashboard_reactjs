import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { TourDetails } from './components/tour/TourDetails.tsx';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="tours/:tourId" element={<TourDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};
