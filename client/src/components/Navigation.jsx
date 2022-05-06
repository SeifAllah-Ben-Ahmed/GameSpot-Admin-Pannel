import List from '@mui/material/List';
import NavItem from './NavItem';
import Dropdown from './Dropdown/Dropdown';
import { ListSubheader } from '@mui/material';

// icons
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

const Navigation = ({ open, onMouseOver, onMouseLeave }) => {
  const nav = [
    {
      title: 'GENERAL',
      menuItem: [
        {
          title: 'App',
          path: '/',
          icon: <SpeedIcon />,
        },
        {
          title: 'Ecommerce',
          path: '/ecommerce',
          icon: <LocalGroceryStoreIcon />,
        },
        {
          title: 'Analytics',
          path: '/analytics',
          icon: <AutoGraphIcon />,
        },
      ],
    },
    {
      title: 'MANAGMENT',
      menuItem: [
        {
          title: 'User',
          icon: <AccountCircleIcon />,
          subMenu: [
            { title: 'list', path: '/user' },
            { title: 'create', path: '/user/new' },
          ],
        },
        {
          title: 'Product',
          path: '/product',
          icon: <ShoppingCartRoundedIcon />,
          subMenu: [
            { title: 'list', path: '/product' },
            { title: 'create', path: '/product/new' },
            { title: 'brands', path: '/product/brands' },
            { title: 'variants', path: '/product/variants' },
          ],
        },
        {
          title: 'Order',
          path: '/order',
          icon: <InventoryRoundedIcon />,
          subMenu: [
            { title: 'list', path: '/order' },
            { title: 'create', path: '/order/new' },
          ],
        },
      ],
    },
  ];

  return (
    <List onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {nav &&
        nav.map((item, index) => (
          <div key={index}>
            {open && <ListSubheader>{item.title}</ListSubheader>}
            {item.menuItem[index].subMenu ? (
              <Dropdown open={open} item={item} />
            ) : (
              <NavItem open={open} item={item} />
            )}
          </div>
        ))}
    </List>
  );
};

export default Navigation;
