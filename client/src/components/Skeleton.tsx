import React from 'react';

const Skeleton: React.FC<SkeletonType> = ({ count }) => {
  let content = [];
  for (let i = 0; i < count; i++) {
    content.push(
      <>
        <div className='h-3 sm:h-6 bg-gray-300 rounded w-3/4'></div>
        <div className='h-3 sm:h-6 bg-gray-300 rounded'></div>
        <div className='h-3 sm:h-6 bg-gray-300 rounded w-5/6'></div>
      </>
    );
  }

  return <div className='animate-pulse space-y-4'>{content}</div>;
};

export default Skeleton;
