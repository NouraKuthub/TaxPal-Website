import React from 'react';
import './Section1.scss';

const Section1 = () => {
    return (
        <div className='backgroundBlue-image'>
            <div className='title'>
                <p class="title-head">Everything you need to run your books.</p>
                <p class="title-sub">Well everything you need if you aren’t that picky about minor details like tax compliance.</p>
            </div>
            <div className='section1'>
                <div className='section1-sub'>
                    <div className='section1-sub2'>
                        <button class="section-button active">
                            <div className='button-text'>
                                <p>Payroll</p>
                                <p>Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.</p>
                            </div>
                        </button>
                        <button class="section-button">
                            <div className='button-text'>
                                <p>Claim expenses</p>
                                <p>Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.</p>
                            </div>
                        </button>
                        <button class="section-button">
                            <div className='button-text'>
                                <p>VAT handling</p>
                                <p>Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.</p>
                            </div>
                        </button>
                        <button class="section-button">
                            <div className='button-text'>
                                <p>Reporting</p>
                                <p>Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.</p>
                            </div>
                        </button>
                    </div>
                    <div className='table-main'>
                    <img src='/table1.png' alt='' class="table" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1