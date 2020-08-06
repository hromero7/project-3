import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../actions/productQuantity';
import { updateUserBalance, updateUserEmotes } from "../../utils/API";

import ReaperEmote from '../../images/ReaperEmote.png';
import LoveEmote from '../../images/LoveEmote.png';
import TearsEmote from '../../images/TearsEmote.png';
import RageEmote from '../../images/RageEmote.png';
import HypeEmote from '../../images/HypeEmote.png';

function Cart({ basketProps, productQuantity, clearProduct }) {
  console.log(basketProps);
  const [purchasedItems, setPurchasedItems] = useState([]);

  let productsInCart = [];
  let purchased = [];

  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart);
  });

  // const productImages = [greyTshirt, greyHoddie, blackTshirt, blackHoddie];
  const productImages = (product) => {
    if (product.tagName === 'ReaperEmote') {
      return ReaperEmote;
    } else if (product.tagName === 'LoveEmote') {
      return LoveEmote;
    } else if (product.tagName === 'TearsEmote') {
      return TearsEmote;
    } else if (product.tagName === 'RageEmote') {
      return RageEmote;
    } else if (product.tagName === 'HypeEmote') {
      return HypeEmote;
    }
  };

  function handleCheckout(){
    let user = JSON.parse(localStorage.getItem('user'));
    
    let price = basketProps.cartCost;
    updateUserBalance(user.id, -price)

    let purchasedProducts = basketProps.products;
    // console.log(basketProps.products.inCart === true);
    
    // console.log(purchased, "LINE58");
    // setPurchasedItems(basketProps.products[0])
    // console.log(basketProps, "line47");
    addToProfile(purchasedProducts, user);

    window.location.replace("/cart");
  };

  function addToProfile(purchasedProducts, user) {
   let id = user.id;
  console.log(purchasedProducts.ReaperEmote.inCart, "LINE 60!!");
    if (purchasedProducts.ReaperEmote.inCart === true) {
       purchased.push(purchasedProducts.ReaperEmote.tagName);
    } 
    if (purchasedProducts.LoveEmote.inCart === true) {
       purchased.push(purchasedProducts.LoveEmote.tagName);
    } 
     if (purchasedProducts.TearsEmote.inCart === true) {
       purchased.push(purchasedProducts.TearsEmote.tagName);
    } 
    if (purchasedProducts.RageEmote.inCart === true) {
       purchased.push(purchasedProducts.RageEmote.tagName);
    } 
    if (purchasedProducts.HypeEmote.inCart === true) {
       purchased.push(purchasedProducts.HypeEmote.tagName);
    };

    updateUserEmotes(id, purchased);
    console.log(purchased, "LINE 72!111!!");
    setPurchasedItems(purchased);
    console.log(purchasedItems, "LINE 7800000");

  }

  productsInCart = productsInCart.map((product, index) => {
    console.log('My product is');
    console.log(product);
    return (
      <Fragment key={index}>
        <div className='product'>
          <ion-icon
            onClick={() => clearProduct(product.tagName)}
            name='close-circle'
          ></ion-icon>
          <img src={productImages(product)} />
          <span className='sm-hide'>{product.name}</span>
        </div>
        <div className='price sm-hide'>${product.price}.00</div>
        <div className='quantity'>
          <ion-icon
            onClick={() => productQuantity('decrease', product.tagName)}
            className='decrease'
            name='arrow-back-circle-outline'
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            onClick={() => productQuantity('increase', product.tagName)}
            className='increase'
            name='arrow-forward-circle-outline'
          ></ion-icon>
        </div>
        <div className='total'>${product.numbers * product.price}.00</div>
      </Fragment>
    );
  });

  return (
    <div className='container-products'>
      <div className='product-header'>
        <h5 className='product-title'>PRODUCT</h5>
        <h5 className='price sm-hide'>PRICE</h5>
        <h5 className='quantity'>QUANTITY</h5>
        <h5 className='total'>TOTAL</h5>
      </div>
      <div className='products'>{productsInCart}</div>
      <div className='basketTotalContainer'>
        <h4 className='basketTotalTitle'>Basket Total</h4>
        <h4 className='basketTotal'>{basketProps.cartCost}.00</h4>
        <button 
        style={{
          backgroundColor: "#45a29e",
          borderRadius: "10px",
          marginLeft: "5px"}} onClick={handleCheckout}>Checkout</button>
        
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
