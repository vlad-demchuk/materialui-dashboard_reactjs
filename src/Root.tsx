import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { HomePage } from './pages/HomePage.tsx';
import CustomThemeProvider from './contexts/CustomThemeProvider.tsx';
import { SettingsPage } from './pages/SettingsPage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { Provider } from 'react-redux';
import { store } from './stores/store.ts';

export const Root = () => {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </Router>
      </CustomThemeProvider>
    </Provider>
  );
};
