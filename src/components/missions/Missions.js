import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
      {missions.map((mission) => (
        <div key={mission.missionId}>
          <h2>{mission.missionName}</h2>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Missions;
