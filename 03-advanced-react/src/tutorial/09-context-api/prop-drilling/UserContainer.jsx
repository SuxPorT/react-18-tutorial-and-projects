/* eslint-disable react/prop-types */
const UserContainer = ({ user, logout }) => {
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>

          <button type='button' className='btn' onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default UserContainer;
