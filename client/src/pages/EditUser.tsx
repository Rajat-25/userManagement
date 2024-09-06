import { useSelector } from 'react-redux';
import InputForm from '../components/InputForm';
import { indexState } from '../store';

const EditUser = () => {
  const { fullName, phoneNo, email } = useSelector((state: indexState) => {
    return state.user_slice.user!;
  });

  return (
    <div className='min-h-screen flex justify-center items-center  '>
      <InputForm userFeilds={{ email, phoneNo, fullName }} />
    </div>
  );
};

export default EditUser;
