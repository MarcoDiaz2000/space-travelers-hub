import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.filter((mission) => mission.reserved));

  return (
    <div>
      <div className="profile-container">
        <div className="column">
          <h2>Missions</h2>
          <table className="profile-table">
            <tbody>
              {missions.map((mission) => (
                <tr key={mission.missionId}>
                  <td className="col1">
                    {mission.missionName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="column">
          <h2>Rockets</h2>
          <table className="profile-table">
            <tbody>
              <tr>
                <td className="col1">
                  Rocket 1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
