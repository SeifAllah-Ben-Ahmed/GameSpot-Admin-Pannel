import DropCollapse from './DropCollapse';

const Dropdown = ({ item, open }) => {
  return (
    <>
      {item.menuItem.map((el, i) => (
        <DropCollapse key={i} item={el} open={open} />
      ))}
    </>
  );
};
export default Dropdown;
