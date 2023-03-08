import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-[4rem]'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className='flex'>
                    <a href='https://www.facebook.com/antinolabsindia/' className='me-4 text-reset'>
                        <BsFacebook />
                    </a>
                    <a href='https://twitter.com/AntinoLabs' className='me-4 text-reset'>
                        <BsTwitter />
                    </a>
                    <a href='https://www.instagram.com/antinolabs/' className='me-4 text-reset'>

                        <AiFillInstagram />
                    </a>
                    <a href='https://www.linkedin.com/company/antino-labs/' className='me-4 text-reset'>
                        <AiFillLinkedin />
                    </a>

                </div>
            </section>
         
                <section  >
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Antino Labs
                                </h6>
                                <p>
                                    We at Antino believe in a unique industry-based, consultative approach that helps clients build and run more productive and innovative businesses
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        HeadPhones
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laptops
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Mobile Phones
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Smart Watch
                                    </a>
                                </p>
                            </MDBCol>



                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-0" />
                                    Gurugram , India
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-0" />
                                    info@antino.io
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-0" /> +91 880-060-9231
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-0" /> +91 782-732-5235
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='https://www.antino.io/'>
                    Antino Labs
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;