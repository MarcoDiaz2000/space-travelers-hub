import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  if (error) { return <div>{error.message}</div>; }
  return isLoading ? <div className="loading">Loading ...</div> : (
    <div className="container-list">
      {data.map((item) => <Rocket key={item.id} item={item} />)}
    </div>
  );
};

export default Rockets;
