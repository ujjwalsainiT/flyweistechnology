import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us:</h3>
                                <p>info@flyweis.technology</p
                                ><p>support@flyweis.technology</p>
                               
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us:</h3>
                                <p>Tel. +91 9811124255</p>
                                
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-location-plus"></i>
                                <h3>India</h3>
                                <p>C-18 First Floor, Acharya Niketan, Mayur Vihar Phase-1, Delhi, 110091</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <a href="https://flyweis.technology/thank_yous.php?comments=Information"><div className="single-contact-info">
                                <i className="bx bx-support"></i>
                                <h3>Live Chat</h3>
                                <p>Live chat all the time with our company 24X7</p>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;