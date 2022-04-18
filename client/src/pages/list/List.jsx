import DataTable from '../../components/DataTable/DataTable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './list.scss';

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <main className="listContainer">
        <Navbar />
        <DataTable />
      </main>
    </div>
  );
};

export default List;
