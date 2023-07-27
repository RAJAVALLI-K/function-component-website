import React from 'react';
import './ProductDetails.css';
import ProductList from './ProductList';

function ProductDetails() {
    return (
        <section>
            <div className='container'>
                <div className='rowss'>
                    <div className='header'>
                        <h2 className='heading'><span>Our</span> Products</h2>
                        <p className='section-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                    </div>
                    <div className='column'>
                        {ProductList.map((e,i) => {
                            return (
                                <div key={i} className='colss'>

                                    <div class="product-image">
                                        <a href="#"><img src={e.src} alt="" /></a>
                                    </div>
                                    <h3>{e.name}</h3>
                                    <p class="product-price"><span>{e.kg}</span> {e.num} </p>
                                    <a href="#" class="cart-btn"><i class="fa fa-shopping-cart"></i> {e.bttn}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails