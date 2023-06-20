import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <div>
      <h1>Rockets</h1>
    </div>
  );
};

export default Rockets;
