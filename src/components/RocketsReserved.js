import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const RocketsReserved = () => {
  const { data, isLoading, error } = useSelector((state) => state.rockets);
  if (error) { return <div>{error.message}</div>; }
  return isLoading ? <div className="loading">Loading ...</div> : (
    <div className="container-list">
      {data.filter((item) => item.reserved).map((item) => (
        <Rocket
          key={item.id}
          item={item}
          myProfile
        />
      ))}
    </div>
  );
};

export default RocketsReserved;
