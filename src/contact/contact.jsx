import React from 'react';
import './style_contact.css';

const Contact = () => {
    return(
        <section id="wrapper">
            <div className="container">
                
                    <div className="Form-left">

                        <div className='box'>

                            <h4>Address</h4><br />
                            <p>Modo Center 8th floor,378 hudson <br /> New York NY </p>
                            <br/><br />
                            
                            <h4>Lets Talk</h4><br />
                            <p><span>+1 800 123 6879</span></p>
                            <br /><br />

                            <h4>General Support</h4><br />
                            <p><span>contact@gmail.com</span></p>
                            

                        </div>

                    </div>
                
                    {/* form right */}

                    <div class="Form-right">
                        <h1>Send Us A  Message</h1>

                        <div className="form">
                            <div className="boxes" >
                                <button className='btm'>TELL US YOUR NAME *</button><br />
                                <input placeholder='First name' type="text" />
                                <input  placeholder="Last name" type="text" />
                            </div>
                            <br />

                            <div className="boxes" >
                                <button className='btm'>ENTER YOUR EMAIL *</button><br />
                                <input className="input1" placeholder="Eg. example@gmail.com" type="text" />
                            </div>
                            <br />

                            <div className="boxes" > 
                                <button className='btm'>ENTER PHONE NUMBER</button><br />
                                <input className="input1" placeholder="Eg. +1 800 0000000" type="number" />
                            </div>
                            <br />

                            <div className="boxes" > 
                                <button className='btm'>MESSAGE</button><br />
                                <textarea name="" id="" cols="50" rows="7"></textarea><br />
                            </div>
                            
                            <button>SEND MESSAGE</button>
                        </div>
                    </div>
            
            </div>
        </section>
    )
}

export default Contact;