import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Mission.css';

const Mission = ({ mission }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <tr>
      <td className="col1">{mission.missionName}</td>
      <td className="col2">{mission.description}</td>
      <td className="col3">
        <button type="button" className={`membership-button ${isActive ? 'active' : ''}`}>
          {isActive ? 'Active Member' : 'Not a Member'}
        </button>
      </td>
      <td className="col4">
        <button type="button" onClick={handleClick} className={`join-button ${isActive ? 'active' : ''}`}>
          {isActive ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    missionName: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Mission;
