/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import Item from './Person';
import { memo } from 'react';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};

export default memo(List);
