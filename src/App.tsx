import { Outlet } from 'react-router-dom';
import { SidebarMenu } from './components/SidebarMenu/SidebarMenu.tsx';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/Header/Header.tsx';
import { DrawerHeader } from './components/SidebarMenu/DrawerHeader.tsx';


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


      <Box
        component="main"
        sx={{ p: 3, m: 0, flexGrow: 100 }}
      >
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
