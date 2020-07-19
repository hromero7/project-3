import React from 'react';
import logo from '../pages/assets/fvg.png';
import StoreItems from './StoreItems';

const StoreContainer = () => {
  return (
    <div className='bg-light p-5 m-5'>
      <h1 className='text-center pb-5'>Store</h1>
      <div className='container'>
        <h3 className='text-left pb-2'>Shopping Cart</h3>
        <table className='table'>
          <thead>
            <th>Image</th>
            <th>ITEM</th>
            <th>QTY</th>
            <th>Price</th>
          </thead>
          {itemsData.itemsData.map((item) => {
            return (
              <StoreItems
                key={item}
                image={item.picture.large}
                item={item}
                qty={item.qty}
                price={item.qty.price}
              />
            );
          })}
        </table>
        <h3 className='text-right pb-3 p'>Subtotal: $0.00</h3>
      </div>
      <button type='button' className='btn btn-primary pl-5 pr-5 pt-2 pb-2'>
        <h3>Checkout</h3>
      </button>
    </div>
  );
};

export default StoreContainer;
