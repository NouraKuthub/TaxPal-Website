import React from 'react';
import './Pricing.scss';

const Pricing = () => {
    return (
        <div className='pricing-container'>
            <div className='pricing-title'>
                <p class="pricing-head">Simple pricing, for everyone.</p>
                <p class="pricing-sub">It doesn’t matter what size your business is, our software won’t work well for you.</p>
            </div>
            <div className='Pricing-list-main'>
                <div className='pricing-list'>
                    <div className='list-column'>
                        <div class="pricing-button">
                            <div className='button-text'>
                                <p className='price'>$9</p>
                                <p className='price-heading'>Starter</p>
                                <p className='price-sub'>Good for anyone who is self-employed and just getting started.</p>
                                <button className='price-button'>Get start</button>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                            </div>
                        </div>
                        <div class="pricing-button  active">
                        <div className='button-text'>
                                <p className='price'>$15</p>
                                <p className='price-heading'>Starter</p>
                                <p className='price-sub'>Good for anyone who is self-employed and just getting started.</p>
                                <button className='price-button-active'>Get start</button>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                            </div>
                        </div>
                        <div class="pricing-button">
                        <div className='button-text'>
                                <p className='price'>$39</p>
                                <p className='price-heading'>Starter</p>
                                <p className='price-sub'>Good for anyone who is self-employed and just getting started.</p>
                                <button className='price-button'>Get start</button>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                                <p className='price-condition'>Send 10 quotes and invoices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing