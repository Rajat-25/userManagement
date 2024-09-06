import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../store';

const inputFeilds = [
  {
    label: 'Full Name',
    id: 'fullName',
    key: '1a',
    placeholder: 'Enter Full name',
  },

  {
    label: 'Email',
    id: 'email',
    key: '1b',
    placeholder: 'Enter Email',
  },
  {
    label: 'Phone No',
    id: 'phoneNo',
    key: '1c',
    placeholder: 'Enter Phone No',
  },
];

const InputForm: React.FC<InputFormType> = ({ userFeilds }) => {
  const [createUser] = useCreateUserMutation();
  const [val, setVal] = useState<UserType>(userFeilds);
  const navigate = useNavigate();

  // input Change Handler
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    setVal((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  // Submit Form Handler
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(val).unwrap();
    setVal(userFeilds);
    navigate('/');
  };

  const content = inputFeilds.map(({ placeholder, id, key, label }) => {
    const value = val[id as keyof UserType] as string;
    return (
      <div
        key={key}
        className=' flex flex-col 
    gap-y-[.5rem]'
      >
        <label className='text-base sm:text-lg font-semibold' htmlFor={id}>
          {label}
        </label>
        <input
          autoFocus={id === 'fullName'}
          onChange={changeHandler}
          className='text-sm sm:text-base focus:outline-none  border p-[.5rem] rounded-full  '
          type='text'
          placeholder={placeholder}
          value={value}
          id={id}
        />
      </div>
    );
  });

  return (
    <form
      onSubmit={submitHandler}
      className='w-[17rem] sm:w-[22rem] border flex flex-col gap-y-[1rem] py-[1.4rem] px-[1.8rem] rounded-xl shadow-lg'
      action=''
    >
      {content}
      <button
        type='submit'
        className='bg-green-500 text-sm  sm:text-base rounded-full py-[.5rem] text-white '
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
