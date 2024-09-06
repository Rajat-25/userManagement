import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { addCurrentUser, useDeleteUserMutation } from '../store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const UserCard: React.FC<UserCardType> = ({ val }) => {
  const { email, phoneNo, fullName, id } = val;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteUser] = useDeleteUserMutation();

  // Edit user
  const editHandler = () => {
    console.log(email);
    const obj = { email, phoneNo, fullName, id };

    dispatch(addCurrentUser(obj));
    navigate(`/edit/${id}`);
  };

  // Delete User
  const deleteHandler = async () => {
    const { data } = await deleteUser(id);
    console.log(data);
  };

  return (
    <div className='flex text-xs sm:text-base shadow-md flex-col gap-y-[.1rem] border rounded-lg p-[.5rem]'>
      <div>{fullName}</div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-x-[.8rem]'>
          <div className='flex text-xs sm:text-sm  gap-x-[.15rem]'>
            <EnvelopeIcon className=' w-[.9rem] sm:w-[1.2rem]' />
            <div className='flex text-xs sm:text-sm '>{email}</div>
          </div>

          <div className='flex text-xs sm:text-sm items-center gap-x-[.15rem]'>
            <PhoneIcon className=' w-[.9rem] sm:w-[1.2rem]' />
            <div className='flex text-xs sm:text-sm '>{phoneNo}</div>
          </div>
        </div>
        <div className='flex gap-x-[1rem]'>
          <PencilIcon
            onClick={editHandler}
            className='hover:scale-110 w-[.9rem] sm:w-[1.2rem]'
          />
          <TrashIcon
            onClick={deleteHandler}
            className='hover:scale-110 w-[.9rem] sm:w-[1.2rem]'
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
