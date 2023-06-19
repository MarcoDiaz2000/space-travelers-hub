import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <tr>
    <td>{mission.missionName}</td>
    <td>{mission.description}</td>
    <td><button type="button">Not a Member</button></td>
    <td><button type="button">Join Mission</button></td>
  </tr>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    missionName: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Mission;
