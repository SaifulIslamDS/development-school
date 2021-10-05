import React from 'react';
import "./Contact.css"
import contact1 from "../../img/contact_us.jpg"
import contact2 from "../../img/contact.jpg"
const Contact = () => {
    return (
        <section className="container mx-auto about-us" >
            <div className="contact-image">
                <img src={contact1} alt="" srcset="" />
            </div>
            <div className="grid grid-cols-2 form-section">
                <div>
                    <img src={contact2} alt="" srcset="" />
                </div>
                
                <div className="form">
                    <h3 className="text-2xl pb-8">Please fill the form ellow to send short meseage</h3>
                    <form action="#">
                        <input type="text" placeholder="Your name here"/>
                        <input type="email" placeholder="Your email here"/>
                        <input type="tel" placeholder="Your phone number here"/>
                        <button className="btn-send">Send Messeage</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;