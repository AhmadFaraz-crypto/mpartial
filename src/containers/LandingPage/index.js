import React from 'react';

//components
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Layout/Header';

//styles
import './style.scss';

const LandingPage = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <div className="container">
                    <div className="mpartial-section">
                        <div className="title left">
                            <Row>
                                <Col md={6} sm={12}>
                                    <div className="section-background-image">
                                        <h1 className="section-title-text">GROUND-TRUTH DATA EVERYONE TRUSTS</h1>
                                    </div>
                                </Col>
                                <Col md={6} sm={12}>
                                    <div className="section-title-description">
                                        <p>We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TruePlan are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="compare-images-section">
                            <div className="container compare-images">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;