import React from 'react';

function Item({ member }) {
  const { name, description, members, image } = member;

  return (
    <tr className="item-row">
      <td>{name}</td>
      <td>{description}</td>
      <td>{members}</td>
      <td>
        <img src={image} alt={name} style={{ width: '100px' }} />
      </td>
    </tr>
  );
}

export default Item;
