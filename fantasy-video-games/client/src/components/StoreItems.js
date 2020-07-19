import React from 'react';

const StoreItems = ({ image, item, qty, price }) => {
  return (
    <tbody>
      <tr>
        <td>
          <img src={image}></img>
          <td>{item}</td>
          <td>{qty}</td>
          <td>{price}</td>
        </td>
      </tr>
    </tbody>
  );
};

export default StoreItems;
