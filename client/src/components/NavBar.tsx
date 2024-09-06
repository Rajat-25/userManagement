import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className='flex  justify-between items-center  font px-[1rem]  py-[.5rem]  mt-1 border rounded-2xl shadow-sm '>
      <h1 className='text-base sm:text-lg lg:text-2xl font-semibold'>
        User Management App
      </h1>

      <div className='flex gap-x-[.5rem]'>
        <button
          onClick={() => navigate('/')}
          className='hover:scale-105 text-sm sm:text-lg  rounded-full border py-[.4rem] px-[1rem]'
        >
          Home
        </button>
        <button
          onClick={() => navigate('/create')}
          className='hover:scale-105 text-sm sm:text-lg   bg-green-500 rounded-full text-white py-[.4rem] px-[1rem]'
        >
          New
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
