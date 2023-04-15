import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getVehicles } from '../redux/slices/vehicles/asyncActions';
import { useSortData } from '../hooks/useSortData';
import VehicleCard from '../components/VehicleCard';
import MoonLoader from 'react-spinners/MoonLoader';
import SortField from '../components/SortField';

const Home = () => {
  const [sortValue, setSortValue] = useState('yearAsc');
  const dispatch = useAppDispatch();
  const { cards, status } = useAppSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  const sortedCards = useSortData(cards, sortValue);

  return (
    <>
      <div className="sorting ms-3">
        <SortField currentField={sortValue} setCurrentField={setSortValue} />
      </div>
      {status === 'loading' ? (
        <MoonLoader className="spinner" color="#000000" />
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          {sortedCards.map((item) => (
            <VehicleCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
