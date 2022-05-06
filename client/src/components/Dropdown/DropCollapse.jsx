import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const DropCollapse = ({ item, open }) => {
  const [drop, setDrop] = useState();

  const handleClick = () => {
    setDrop(!drop);
  };

  //   useEffect(() => {
  //     if (!open) {
  //       setDrop(false);
  //     }
  //   }, [open, drop]);

  const location = useLocation();
  return (
    <>
      <ListItem
        onClick={handleClick}
        selected={location.pathname.startsWith(item.path)}
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
        {open ? drop ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
      {item.subMenu.map((menu, menui) => (
        <Collapse key={menui} in={drop} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link
              color="text.primary"
              underline="none"
              component={RouterLink}
              to={`${menu.path}`}
            >
              {console.log(
                menu.path === location.pathname,
                menu.path,
                location.pathname
              )}
              <ListItem
                selected={menu.path === location.pathname}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={menu.title} />
              </ListItem>
            </Link>
          </List>
        </Collapse>
      ))}
      )
    </>
  );
};

export default DropCollapse;
