import { useState } from 'react';

const ShortCircuitExamples = () => {
  const [text] = useState(''); // falsy
  const [name] = useState('Susan'); // truthy
  const [user] = useState({ name: 'John' });
  const [isEditing] = useState(false);

  return (
    <div>
      {/* content inside element */}
      <h2>{text || 'Default value'}</h2>
      {/* toggle element */}
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below */}
      {!text && <h4>also works</h4>}
      {/* toggle component */}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
      {/* inside element */}
      <button className='btn'>{isEditing ? 'Edit' : 'Add'}</button>
      {/* toggle elements/components */}
      {user ? (
        <div>
          <h4>Hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className='btn'>log out</button>
    </div>
  );
};

export default ShortCircuitExamples;
