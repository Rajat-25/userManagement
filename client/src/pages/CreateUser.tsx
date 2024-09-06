import InputForm from '../components/InputForm';

const CreateUser = () => {
  const userFeilds = {
    fullName: '',
    email: '',
    phoneNo: '',
  };

  return (
    <div className=' min-h-screen flex justify-center items-center   '>
      <InputForm userFeilds={userFeilds} />
    </div>
  );
};

export default CreateUser;
