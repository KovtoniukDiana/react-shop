import React from 'react'

export default function FullItem({item}) {


    return (
        <div>
        
                <div className='item' key={item.id} >

                <div  className='img-container'>
                    <img src={'./img/'+ item.img} />
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                <div className='price-wrapper'>
                    <p>{item.price + '$'}</p>

                    <div className='add-container'>
                    <span className='add-to-cart'>+</span>
                    </div>
                </div>
                </div>
           
        </div>
    )
}
