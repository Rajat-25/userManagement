import Skeleton from '../components/Skeleton';
import UserCard from '../components/UserCard';
import { useFetchUserQuery } from '../store';

const Home = () => {
  const { data, isLoading, isError, isSuccess } = useFetchUserQuery(undefined);

  let content;
  if (isLoading) {
    content = <Skeleton count={5} />;
  } else if (isError) {
    content = <div>Error while Loading users</div>;
  } else if (isSuccess) {
    const elements = data.map((ele: UserApiType) => {
      const { name, phone, id, email } = ele;

      const obj = {
        fullName: name,
        phoneNo: phone,
        id,
        email,
      };

      return <UserCard key={ele.id} val={obj} />;
    });

    content = (
      <div className='pt-[.5rem] px-2 flex flex-col gap-y-[.5rem] '>
        {elements}
      </div>
    );
  }
  return <div className=''>{content}</div>;
};

export default Home;
