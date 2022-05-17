import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useToggle from '../../hook/useToggle';

function SidebarItems({ item }) {
  const { onToggle, toggle } = useToggle(true);

  return (
    <>
      <li className="mb-1 d-grid">
        <button
          className="btn btn-toggle collapsed"
          onClick={onToggle}
          aria-expanded={toggle}
        >
          {item.title}
        </button>
      </li>
      <Collapse in={toggle}>
        <ul className="mb-1">
          {item.subTitles.map((item, index) => (
            <li className="btn-toggle-nav" key={index}>
              <Link to={item.to}>{item.sub}</Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </>
  );
}

export default SidebarItems;
