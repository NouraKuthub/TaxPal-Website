import React from 'react';
import './BusinessTask.scss';

const Section2 = () => {
    return (
        <div>
            <div className='business-container'>
                <p class="business-head">Simplify everyday business tasks.</p>
                <p class="business-sub">Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.</p>
            </div>
            <div className='task-parent'>
                <div className='task'>
                    <ul class="task-flex">
                        <li>
                            <img src='/increase.png' alt='' class="increase" />
                            <p class="task-head active">Reporting</p>
                            <p class="task-discription">Stay on top of things with always up-to-date reporting features.</p>
                        </li>
                        <li>
                            <p class="task-head">Stay on top of things with always up-to-date reporting features.</p>
                        </li>
                    </ul>
                </div>
                <div className='task'>
                    <ul class="task-flex">
                        <li>
                            <img src='/toggle.png' alt='' class="increase" />
                            <p class="task-head">Inventory</p>
                            <p class="task-discription">Never lose track of what’s in stock with accurate inventory tracking.</p>
                        </li>
                        <li>
                            <p class="task-head">We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.</p>
                        </li>
                    </ul>
                </div>
                <div className='task'>
                    <ul class="task-flex">
                        <li>
                            <img src='/account.png' alt='' class="increase" />
                            <p class="task-head">Contacts</p>
                            <p class="task-discription">Organize all of your contacts, service providers, and invoices in one place.</p>
                        </li>
                        <li>
                            <p class="task-head">This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='table2-main'>
                <center>
                <img src='/table2.png' alt='' class="table2" />
                </center>
            </div>
        </div>
    )
}

export default Section2