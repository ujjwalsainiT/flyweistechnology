import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <footer className="footer-top-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <a href="/" className="logo" >
                                        <img src="/images/flyweis_logo.png" alt="Image" />
                                    </a>

                                    <p>In the span of 5 years Flyweis Technology has successfully helped a number of Businesses to grow from the bottom and helped them to achieve their goals. Many Businesses has shown trust on Flyweis Technology either for generating Leads, Website or any kind of a customised software which helped them to grow and sustain competitively in the market.</p>

                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://www.facebook.com/Flyweis.Technology/?ref=py_c" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/FlyweisT" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/flyweis.technology/?hl=en" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="/services/crm">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    CRM
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/chatsoftware">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Chat Software
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/customizedsoftware">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Customized Software
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/websitedevelopment">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Website Development
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/appdevelopment">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    App Development
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/orm">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Online Reputation Management (ORM)
                                                </a>
                                            </Link>
                                        </li>



                                        <li>
                                            <Link href="/services/seo">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Local SEO
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/leadgeneration">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Lead Generation
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/socialmediamarketing">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Social Media Marketing
                                                </a>
                                            </Link>
                                        </li>

                    
                                            


                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Important Links</h3>

                                    <ul>
                                        <li>
                                            <Link href="/about-us">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Services
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Portfolio
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    FAQ
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Support
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Blog
                                                </a>
                                            </Link>
                                        </li>


                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Privacy Policy
                                                </a>
                                            </Link>
                                        </li>

                                        {/* <li>
                                            <Link href="/terms-conditions">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Terms & Conditions
                                                </a>
                                            </Link>
                                        </li> */}
                                        
                                        

                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Information</h3>

                                    <ul className="information">
                                        <li className="address">
                                            <i className="flaticon-call"></i>
                                            <span>Phone</span>
                                            +91 9811124255
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-envelope"></i>
                                            <span>Email</span>
                                            info@flyweis.technology<br />
                                            support@flyweis.technology
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-maps-and-flags"></i>
                                            <span>Address</span>
                                            C-18 First Floor, Acharya Niketan, Mayur Vihar Phase-1, Delhi, 110091
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-shape">
                        <img src="/images/shape/footer-shape-one.png" alt="Image" />
                        <img src="/images/shape/footer-shape-two.png" alt="Image" />
                    </div>
                </footer>
    
                {/* Footer Bottom Area   */}
                <footer className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="copy-right">
                                    <p>Copyright &copy; {currentYear} Flyweis Technology. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="privacy">
                                    <ul>
                                        {/* <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li> */}



                                      




                                        <li>


                                        

                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="designed">
                                    <p>
                                        Help <i className='bx bx-heart'></i> 
                                        <Link href="/faq">
                                        <a >FAQ</a>
                                        </Link>


                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;