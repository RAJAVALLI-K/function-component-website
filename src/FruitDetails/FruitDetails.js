import React from 'react';
import './FruitDetails.css';
import Fimg from './img/abt.jpg'

function FruitDetails() {
    return (
        <section className='fruit'>
            <div className='container'>
                <div className='row-fruit'>
                    <div className='col-fruit'>
                        <div class="abt-bg">
                            <img src={Fimg} className='fimg' />
                            <a href="#" class="video-play-btn popup-youtube">
                                <i class="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className='col-fruit'>
                        <div class="abt-text">
                            <p class="top-sub">Since Year 1999</p>
                            <h2 class="head">We are <span>Fruitkha</span></h2>
                            <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                            <a href="#" class="boxed-btn">know more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FruitDetails