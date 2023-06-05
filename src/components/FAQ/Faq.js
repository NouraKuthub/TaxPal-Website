import React from 'react';
import './Faq.scss';

const Faq = () => {
    return (
        <div className='backgroundWhite-image'>
            <div className='faq-container'>
                <p class="faq-title">Frequently asked questions</p>
                <p class="faq-title-sub">If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.</p>
            </div>
            <div className='list-parent'>
                <div className='list'>
                    <ul class="list-flex">
                        <li>
                            <h3 class="list-head">Does TaxPal handle VAT?</h3>
                            <p class="list-discription">Well no, but if you move your company offshore you can probably ignore it.</p>
                        </li>
                        <li>
                            <h3 class="list-head">Can I pay for my subscription via purchase order?</h3>
                            <p class="list-discription">Absolutely, we are happy to take your money in all forms.</p>
                        </li>
                        <li>
                            <h3 class="list-head">How do I apply for a job at TaxPal?</h3>
                            <p class="list-discription">We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.</p>
                        </li>
                    </ul>
                </div>
                <div className='list'>
                    <ul class="list-flex">
                        <li>
                            <h3 class="list-head">Does TaxPal handle VAT?</h3>
                            <p class="list-discription">Well no, but if you move your company offshore you can probably ignore it.</p>
                        </li>
                        <li>
                            <h3 class="list-head">Can I pay for my subscription via purchase order?</h3>
                            <p class="list-discription">Absolutely, we are happy to take your money in all forms.</p>
                        </li>
                        <li>
                            <h3 class="list-head">How do I apply for a job at TaxPal?</h3>
                            <p class="list-discription">We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.</p>
                        </li>
                    </ul>
                </div>
                <div className='list'>
                    <ul class="list-flex">
                        <li>
                            <h3 class="list-head">Does TaxPal handle VAT?</h3>
                            <p class="list-discription">Well no, but if you move your company offshore you can probably ignore it.</p>
                        </li>
                        <li>
                            <h3 class="list-head">Can I pay for my subscription via purchase order?</h3>
                            <p class="list-discription">Absolutely, we are happy to take your money in all forms.</p>
                        </li>
                        <li>
                            <h3 class="list-head">How do I apply for a job at TaxPal?</h3>
                            <p class="list-discription">We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer'>
                <div className='footer-logo'>
                    <img src='/logo.png' alt='' class="logo" />
                </div>
                <div className='links'>
                    <p>Features</p>
                    <p>Features</p>
                    <p>Features</p>
                </div>
            </div>
            <div className='footer-bottom'>
                <hr className='line'></hr>
                <div className='copyright'>
                    <p >Copyright © 2023 TaxPal. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Faq;