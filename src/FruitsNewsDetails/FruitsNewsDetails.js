import React from 'react';
import './FruitsNewsDetails.css';
import FruitsNewsList from './FruitsNewList';

function FruitsNewsDetails() {
    return (
        <section className='newslist'>
            <div className='container'>
                <div className='row-name'>
                    <div className='header'>
                        <h2 className='heading h2-val'><span>Our</span> News</h2>
                        <p className='section-title h2-val'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                    </div>
                    <div className='column'>
                        {FruitsNewsList.map((li,i) => {
                            return (
                                <div key={i} className='colss colll'>
                                    <div class="product-image1">
                                        <a href="#"><img src={li.src} alt="" /></a>
                                    </div>
                                    <div class="news-text-box">
                                        <h3><a href="single-news.html">{li.para}</a></h3>
                                        <p class="blog-meta">
                                            <span class="author"><i class="fa fa-user"></i> {li.ad}</span>
                                            <span class="date"><i class="fa fa-calendar"></i>{li.cal}</span>
                                        </p>
                                        <p class="excerpt">{li.paa}</p>
                                        <a href="#" class="read-more-btn">{li.bttn} <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>)
                        })}
                    </div>
                    <div className='buttons'>
                        <a href="#" class="boxed-btn">More News</a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FruitsNewsDetails 