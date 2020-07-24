import React from 'react';
import ReaperEmote from '../../images/ReaperEmote.png';
import LoveEmote from '../../images/LoveEmote.png';
import TearsEmote from '../../images/TearsEmote.png';
import RageEmote from '../../images/RageEmote.png';
import HypeEmote from '../../images/HypeEmote.png';
import './shop.css';

const Shop = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='image'>
            <img src={ReaperEmote} alt='ReaperEmote' />
            <h3>Reaper Emote</h3>
            <h3>1,000</h3>
            <a
              onClick={() => props.addBasket('ReaperEmote')}
              className='addToCart cart1'
              href='#'
            >
              Add to Cart
            </a>
          </div>
        </div>
        <div className='col'>
          <div className='image'>
            <img src={LoveEmote} alt='LoveEmote' />
            <h3>Love Emote</h3>
            <h3>1,000</h3>
            <a
              onClick={() => props.addBasket('LoveEmote')}
              className='addToCart cart2'
              href='#'
            >
              Add to Cart
            </a>
          </div>
        </div>
        <div className='col'>
          <div className='image'>
            <img src={TearsEmote} alt='TearsEmote' />
            <h3>Tears Emote</h3>
            <h3>1,000</h3>
            <a
              onClick={() => props.addBasket('TearsEmote')}
              className='addToCart cart3'
              href='#'
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col'>
          <div className='image'>
            <img src={RageEmote} alt='RageEmote' />
            <h3>Rage Emote</h3>
            <h3>1,000</h3>
            <a
              onClick={() => props.addBasket('RageEmote')}
              className='addToCart cart4'
              href='#'
            >
              Add to Cart
            </a>
          </div>
        </div>
        <div className='col'>
          <div className='image'>
            <img src={HypeEmote} alt='HypeEmote' />
            <h3>Hype Emote</h3>
            <h3>1,000</h3>
            <a
              onClick={() => props.addBasket('HypeEmote')}
              className='addToCart cart4'
              href='#'
            >
              Add to Cart
            </a>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
};

export default Shop;
