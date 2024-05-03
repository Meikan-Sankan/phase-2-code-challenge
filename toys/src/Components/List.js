import React from 'react';
import Item from './Item';  // Ensure the correct import path

function List({ member }) {
  return (
    <table>
      <tbody>
        <Item member={member} />
      </tbody>
    </table>
  );
}

export default List;
