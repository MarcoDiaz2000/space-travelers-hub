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
        {mission.reserved && (
        <button type="button" className="membership-button active">
          Active Member
        </button>
        )}
        {!mission.reserved && (
        <button type="button" className="membership-button">
          Not a Member
        </button>
        )}
      </td>
      <td className="col4">
        {mission.reserved && (
        <button type="button" onClick={handleClick} className="join-button active">
          Leave Mission
        </button>
        )}
        {!mission.reserved && (
        <button type="button" onClick={handleClick} className="join-button">
          Join Mission
        </button>
        )}
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
