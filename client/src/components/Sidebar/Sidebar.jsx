import SidebarItems from './SidebarItems';
import { nav } from '../../data/nav';

const Sidebar = () => {
  return (
    <aside className="col-2 card left-side-menu">
      <ul className="list-unstyled sticky-top">
        {nav.map((item, i) => (
          <SidebarItems item={item} key={i} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
