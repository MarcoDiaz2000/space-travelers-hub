import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';
import '../../styles/Mission.css';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (mission.reserved) {
      dispatch(leaveMission(mission.missionId));
    } else {
      dispatch(joinMission(mission.missionId));
    }
  };

  return (
    <tr>
      <td className="col1">{mission.missionName}</td>
      <td className="col2">{mission.description}</td>
      <td className="col3">
        <button type="button" className={`membership-button ${mission.reserved ? 'active' : ''}`}>
          {mission.reserved ? 'Active Member' : 'Not a Member'}
        </button>
      </td>
      <td className="col4">
        <button type="button" onClick={handleClick} className={`join-button ${mission.reserved ? 'active' : ''}`}>
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    missionId: PropTypes.string,
    missionName: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
