import { Outlet } from 'react-router-dom';
import Navibar from '../components/UI/Navibar';

const MainLayout = () => {
  return (
    <>
      <Navibar />
      <Outlet />
    </>
  );
};

export default MainLayout;
