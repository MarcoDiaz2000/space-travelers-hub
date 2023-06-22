import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div>
      <h1>Missions</h1>
      <table className="mission-table">
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.missionId} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
