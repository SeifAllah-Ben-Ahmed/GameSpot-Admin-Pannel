import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';

// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

const Navigation = ({ open }) => {
  const nav = [
    { title: 'Home', icon: <HomeRoundedIcon />, path: '/' },
    { title: 'Media', icon: <PermMediaRoundedIcon />, path: '/media' },
    { title: 'Users', icon: <AccountCircleIcon />, path: '/users' },
    {
      title: 'Categories',
      icon: <LocalOfferRoundedIcon />,
      path: '/categories',
    },
    { title: 'Products', icon: <ShoppingCartRoundedIcon />, path: '/products' },
    { title: 'Commandes', icon: <InventoryRoundedIcon />, path: '/commandes' },
  ];
  const location = useLocation();
  return (
    <List>
      {nav.map((item, index) => (
        <Link
          color="text.primary"
          underline="none"
          component={RouterLink}
          key={index}
          to={`${item.path}`}
        >
          <ListItem
            selected={item.path === location.pathname}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              variant="inherit"
              color="text.default"
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default Navigation;
