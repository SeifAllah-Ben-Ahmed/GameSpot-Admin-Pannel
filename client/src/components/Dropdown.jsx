import React, { useState } from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const Dropdown = ({ open }) => {
  const [drop, setDrop] = useState(true);

  const handleClick = () => {
    setDrop(!drop);
  };

  return (
    <>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
        onClick={handleClick}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {drop ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={drop} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};
export default Dropdown;
