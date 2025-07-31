import React, { useState } from 'react';

export default function Items({products, AddToCart, onShowItem}) {


  return (
    <main>
      {products.map( el => (
        <div className='item' key={el.id} >

          <div  className='img-container' onClick={() => onShowItem(el)}>
            <img src={'./img/'+ el.img} />
          </div>

          <h4>{el.title}</h4>
          <p>{el.desc}</p>

          <div className='price-wrapper'>
            <p>{el.price + '$'}</p>

            <div className='add-container' onClick={() => AddToCart(el)}>
              <span className='add-to-cart'>+</span>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
