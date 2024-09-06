import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Root = () => {
  return (
    <div className=' min-h-dvh '>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
