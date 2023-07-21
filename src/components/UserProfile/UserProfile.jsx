import React from 'react';
import PropTypes from 'prop-types';

function UserProfile(props) {

  return (
    <div>
        <div>{props.title}</div>
        <div>{props.name}</div>
    </div>
  );
}

UserProfile.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    address: PropTypes.shape({
        zipCode: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired
    }).isRequired
    
}

// const UserRoles = {
//   ADMIN: 'admin',
//   USER: 'user'
// };

// export { UserRoles };
export default UserProfile;
