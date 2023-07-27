import React from 'react';
import './ShopDetails.css';

function ShopDetails() {
    return (
        <section className='shop'>
            <div className='container'>
                <div className='rows'>
                    <div className='col'>
                        <div><i className='fa fa-shipping-fast'></i></div>
                        <div>
                            <h3>Free Shipping</h3>
                            <p>When order over $75</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div><i className='fa fa-phone-volume'></i></div>
                        <div>
                            <h3>24/7 Support</h3>
                            <p>Get support all day</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div><i className='fa fa-sync'></i></div>
                        <div>
                            <h3>Refund</h3>
                            <p>Get refund within 3 days!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopDetails