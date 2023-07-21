import React from 'react';
import PropTypes from 'prop-types';

function UserProfile(props) {

    // const handleOnClick = () => {
    //     props.onUpdateClicked('Hello', 30)
    // }

  return (
    <div>
        {/* <div>{props.title}</div>
        <div>{props.name}</div>
        <button onClick={handleOnClick}>Update</button> */}
    </div>
  );
}

// UserProfile.propTypes = {
//     title: PropTypes.string.isRequired,
//     name: PropTypes.string,
//     address: PropTypes.shape({
//         zipCode: PropTypes.string.isRequired,
//         city: PropTypes.string.isRequired
//     }).isRequired,
//     onUpdateClicked: PropTypes.func,
    
// }

// const UserRoles = {
//   ADMIN: 'admin',
//   USER: 'user'
// };

// export { UserRoles };
export default UserProfile;
