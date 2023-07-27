import React from 'react';
import Straw from "./img/a.jpg";
import './TimeDetails.css';

function TimeDetails() {
  return (
    <section className='shop'>
      <div className='container'>
        <div className='rows-1'>
          <div className='cols-1'>
            <div class="price-box">
              <div class="inner-price">
                <span class="price">
                  <strong>30%</strong><br />
                  off per kg
                </span>
              </div>
            </div>
            <img src={Straw} alt="strawberry" />
          </div>
          <div className='cols-1'>
            <h3 className='head'><span class="orange-text">Deal</span> of the month</h3>
            <h4>Hikan Strwaberry</h4>
            <div class="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>
            <div class="time-counter">
              <div class="time-countdown clearfix" data-countdown="2020/2/01">
                <div class="counter-column">
                  <div class="inner"><span class="count">00</span>Days</div>
                </div>
                <div class="counter-column">
                  <div class="inner"><span class="count">00</span>Hours</div>
                </div>
                <div class="counter-column">
                  <div class="inner"><span class="count">00</span>Mins</div>
                </div>
                <div class="counter-column">
                  <div class="inner"><span class="count">00</span>Secs</div>
                </div>
              </div>
            </div>
            <a href="#" class="cart-btn"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeDetails