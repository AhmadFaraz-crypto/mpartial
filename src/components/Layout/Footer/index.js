import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

//styles
import './style.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Row>
                    <Col md={6} sm={6}>
                        <p>mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved.</p>
                    </Col>
                    <Col md={6} sm={6}>
                        <ul>
                            <li><FaFacebook className="social-icon" /></li>
                            <li><FaInstagram className="ml-3 social-icon" /></li>
                            <li><FaLinkedinIn className="ml-3 social-icon" /></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Footer;