import { Outlet } from 'react-router-dom';
import { SidebarMenu } from './components/sidebarMenu/SidebarMenu.tsx';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/header/Header.tsx';
import { DrawerHeader } from './components/sidebarMenu/DrawerHeader.tsx';
import { Container } from '@mui/material';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />

      <SidebarMenu
        open={open}
        handleDrawerClose={handleDrawerClose}
      />


      <Container
        component="main"
        sx={{  p: 3 }}
        maxWidth="xl"
      >
        <DrawerHeader />

        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
