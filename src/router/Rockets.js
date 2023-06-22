import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

const Rockets = () => {
  // const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.rockets);
  // useEffect(() => {
  //   dispatch(getRockets());
  // }, [dispatch]);
  if (error) { return <div>{error.message}</div>; }
  return isLoading ? <div className="loading">Loading ...</div> : (
    <div className="container-list">
      {data.map((item) => <Rocket key={item.id} item={item} />)}
    </div>
  );
};

export default Rockets;
