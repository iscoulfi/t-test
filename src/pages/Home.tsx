import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getVehicles } from '../redux/slices/vehicles/asyncActions';
import VehicleCard from '../components/VehicleCard';
import MoonLoader from 'react-spinners/MoonLoader';

const Home = () => {
  const dispatch = useAppDispatch();
  const { cards, status } = useAppSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);
  return (
    <>
      {status === 'loading' ? (
        <MoonLoader className="spinner" color="#000000" />
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          {cards.map((item) => (
            <VehicleCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
