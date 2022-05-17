import BrandForm from '../components/BrandForm/BrandForm';
import Tab from '../components/Tab';

const Brands = () => {
  return (
    <main>
      <div className="card">
        <div className="card-body">
          <BrandForm />
          <div className="row">
            <Tab />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Brands;
