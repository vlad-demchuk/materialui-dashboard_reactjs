import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { TourDetails } from './components/Tour/TourDetails.tsx';
import CustomThemeProvider from './contexts/CustomThemeProvider.tsx';
import { SettingsPage } from './pages/SettingsPage.tsx';

export const Root = () => {
  return (
    <CustomThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="tours/:tourId" element={<TourDetails />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
};
