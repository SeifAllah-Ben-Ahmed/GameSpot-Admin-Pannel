import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ListItemIcon, ListItemText, ListItem } from '@mui/material';
import Link from '@mui/material/Link';

const NavItem = ({ item, index, open }) => {
  const location = useLocation();

  return (
    <>
      {item.menuItem.map((el, i) => (
        <Link
          color="text.primary"
          underline="none"
          component={RouterLink}
          key={i}
          to={`${el.path}`}
        >
          <ListItem
            selected={el.path === location.pathname}
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
              {el.icon}
            </ListItemIcon>
            <ListItemText primary={el.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItem>
        </Link>
      ))}
    </>
  );
};

export default NavItem;
