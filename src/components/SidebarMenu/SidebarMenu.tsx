import * as React from 'react';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import { DrawerHeader } from './DrawerHeader.tsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Checklist, Group, Inventory } from '@mui/icons-material';
import { NavLink } from '../UI/NavLink.tsx';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuItems = [
  {
    type: 'presentation',
    component: <Typography
      variant="subtitle2"
      marginLeft={2}
    >OVERVIEW</Typography>,
    whenOpenOnly: true,
  },
  { text: 'Dashboard', path: '/', icon: <HomeIcon /> },
  { text: 'Activities', path: '/activities', icon: <EventIcon /> },
  { type: 'presentation', component: <Divider sx={{ marginBottom: 1 }} /> },
  {
    type: 'presentation',
    component: <Typography
      variant="subtitle2"
      marginLeft={2}
    >MANAGEMENT</Typography>,
    whenOpenOnly: true,
  },
  { text: 'Products', path: '/products', icon: <Inventory /> },
  { text: 'Orders', path: '/orders', icon: <Checklist /> },
  { text: 'Users', path: '/users', icon: <Group /> },
  { type: 'presentation', component: <Divider sx={{ marginBottom: 1 }} /> },
  {
    type: 'presentation',
    component: <Typography
      variant="subtitle2"
      marginLeft={2}
    >OTHERS</Typography>,
    whenOpenOnly: true,
  },
  { text: 'Settings', path: '/settings', icon: <SettingsIcon /> },
  { text: 'Notifications', path: '/notifications', icon: <NotificationsIcon /> },
  { text: 'Help', path: '/help', icon: <HelpIcon /> },
];

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

interface Props {
  open: boolean,
  handleDrawerClose: () => void
}

export const SidebarMenu: React.FC<Props> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item, index) =>
          item.type === 'presentation' ? (
            <Box
              key={index}
              sx={{
                ...(item?.whenOpenOnly && !open && { display: 'none' }),
              }}
            >
              {item.component}
            </Box>
          ) : (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: 'block' }}
              component={NavLink}
              to={item.path ?? '/'}
            >
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item.icon ?? (index % 2 === 0 ? <InboxIcon /> : <MailIcon />)}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    { color: 'text.primary' },
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ),
        )}
      </List>
    </Drawer>
  );
};
