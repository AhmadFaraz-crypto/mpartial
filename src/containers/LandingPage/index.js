import React from 'react';

//components
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Button from '../../components/styledComponents/Button';
import Slider from '../../components/Slider';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { MdInfoOutline } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';

//images
import PostMigration from '../../assets/images/post_migration.jpeg';
import PreMigration from '../../assets/images/pre_migrations.jpeg';
import FirstSketch from '../../assets/images/first_sketch.png';
import SecondSketch from '../../assets/images/second_sketch.png';
import Handle from '../../assets/images/handle.png';
import Page1 from '../../assets/images/page_1.jpeg';
import Page2 from '../../assets/images/page_2.jpeg';
import Page3 from '../../assets/images/page_3.jpeg';
import Page4 from '../../assets/images/page_4.jpeg';
import Page5 from '../../assets/images/page_5.jpeg';
import Page6 from '../../assets/images/page_6.jpeg';

//styles
import './style.scss';

const MyCustomHandle = () => (
    <>
        <div className="line">
            <div className="horizental-line"></div>
            <div className="arrow-images">

            </div>
            <div className="second-line">
                <img src={Handle} loading="lazy" alt="handle" />
            </div>
        </div>
        <div className="resize-center">
            <div className="resize-center-expand">

            </div>
            <div className="resize-sensor-shrink">

            </div>
        </div>
    </>
)

const LandingPage = () => {
    const handleLeftArrow = () => (
        <>
            <a className="carousel-control-prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
        </>
    );

    const handleRightArrow = () => (
        <a className="carousel-control-next">
            <span className="carousel-control-next-icon"></span>
        </a>
    );

    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <div className="mpartial-section">
                    <div className="container">
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
                    </div>
                    <div className="compare-images-section">
                        <div className="container compare-images">
                            <ReactCompareSlider
                                handle={<MyCustomHandle />}
                                itemOne={<ReactCompareSliderImage src={PostMigration} alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src={PreMigration} alt="Image two" />}
                            />
                        </div>
                    </div>
                    <div className="try-now-btn">
                        <Button text="Try Today" variant="primary" className="m-auto" />
                    </div>
                    <div className="how-it-works">
                        <div className="container">
                            <Row>
                                <Col>
                                    <div className="section-background-image">
                                        <h1 className="section-title-how-it-works-text">How It Works</h1>
                                    </div>
                                </Col>
                            </Row>
                            <div className="data-points">
                                <Row className="ml-auto mr-auto">
                                    <Col md={4} sm={12}>
                                        <Row className="data-points-item ml-auto mr-auto">
                                            <Col md={4} sm={12} className="data-number">
                                                <span>1</span>
                                            </Col>
                                            <Col md={8} sm={12}>
                                                <span className="data-text">Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <Row className="data-points-item ml-auto mr-auto">
                                            <Col md={4} sm={12} className="data-number">
                                                <span>2</span>
                                            </Col>
                                            <Col md={8} sm={12}>
                                                <span className="data-text">Submit the Matterport scans via the mpartial portal and then go back to what you do great.</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <Row className="data-points-item ml-auto mr-auto">
                                            <Col md={4} sm={12} className="data-number">
                                                <span>3</span>
                                            </Col>
                                            <Col md={8} sm={12}>
                                                <span className="data-text">Receive a well-formatted, fully documented Xactimate PDF, ESX & Matterport TruePlan SKX.</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className="get-btn">
                                <Button text="Get Started" variant="primary" className="m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="water-fee-structure">
                        <div className="container">
                            <Row>
                                <Col>
                                    <div className="section-background-image">
                                        <h1 className="section-title-how-it-works-text">Waterfall Fee Structure</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Slider />
                        </div>
                    </div>
                    <div className="mt-5 pt-5 mb-5">
                        <div className="container">
                            <Row>
                                <Col lg={1} />
                                <Col lg={5}>
                                    <div className="fee-box mobile-bottom">
                                        <div className="header">
                                            <span> Trial Plan</span>
                                            <div>
                                                <MdInfoOutline className="info-icon" />
                                            </div>
                                        </div>
                                        <div className="body text-center">
                                            <h4>7.50%</h4>
                                            <div style={{ height: '150px' }}>
                                                <div className="d-flex align-items-center mb-1">
                                                    <IoIosCheckmarkCircleOutline className="check-circle" />
                                                    <span className="ml-2">Access to mpartial engine</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <IoIosCheckmarkCircleOutline className="check-circle" />
                                                    <span className="ml-2">Minimum $750 initial deposit</span>
                                                </div>
                                            </div>
                                            <h4 style={{ fontSize: '30px' }}>Free</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div className="fee-box">
                                        <div className="header" style={{ background: 'rgb(10, 81, 105)' }}>
                                            <span> Trial Plan</span>
                                            <div>
                                                <MdInfoOutline className="info-icon" />
                                            </div>
                                        </div>
                                        <div className="body text-center">
                                            <h4>7.50%</h4>
                                            <div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <IoIosCheckmarkCircleOutline className="check-circle" />
                                                    <span className="ml-2">Access to mpartial engine</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <IoIosCheckmarkCircleOutline className="check-circle" />
                                                    <span className="ml-2">Discounted fee schedule</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <IoIosCheckmarkCircleOutline className="check-circle" />
                                                    <span className="ml-2">Unlimited collaborators </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <IoIosCheckmarkCircleOutline className="check-circle" />
                                                    <span className="ml-2">Dedicated account manager</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <IoIosCheckmarkCircleOutline className="check-circle" />
                                                    <span className="ml-2">Prioritized turnaround time</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <IoIosCheckmarkCircleOutline className="check-circle" />
                                                    <span className="ml-2">Minimum $750 initial deposit</span>
                                                </div>
                                            </div>
                                            <h4 style={{ fontSize: '30px' }}>Free</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={1} />
                            </Row>
                        </div>
                    </div>
                    <div className="how-it-works pb-5">
                        <div className="container">
                            <Row>
                                <Col>
                                    <div className="section-background-image">
                                        <h1 className="section-title-how-it-works-text">Example Deliverables</h1>
                                    </div>
                                </Col>
                            </Row>
                            <h3 className="mt-1">Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)</h3>
                            <Row>
                                <Col lg={6}>
                                    <iframe width="100%" height="480" src="https://my.matterport.com/show/?m=e5Wxtu8Arbx" frameborder="0" loading="lazy" allowfullscreen="" allow="vr"></iframe>
                                </Col>
                                <Col lg={6}>
                                    <iframe width="100%" height="480" src="https://my.matterport.com/show/?m=DhqzGgT7M1E" frameborder="0" loading="lazy" allowfullscreen="" allow="vr"></iframe>
                                </Col>
                            </Row>
                            <h3 className="mt-5">Immaculate. Impartial. [ESX]</h3>
                            <div className="carousel">
                                <Carousel width="75%" 
                                    showIndicators={true} 
                                    autoPlay={true} 
                                    infiniteLoop={true} 
                                    showStatus={false} 
                                    showThumbs={false} 
                                    dynamicHeight={false} 
                                    showArrows={false} 
                                    renderArrowPrev={(clickHandler) => 
                                    (<a className="carousel-control-prev" onClick={clickHandler}>
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>)} 
                                    renderArrowNext={(clickHandler) => 
                                    (<a className="carousel-control-next" onClick={clickHandler}>
                                        <span className="carousel-control-next-icon"></span>
                                    </a>)}>
                                    <div>
                                        <img src={Page1} />
                                    </div>
                                    <div>
                                        <img src={Page2} />
                                    </div>
                                    <div>
                                        <img src={Page3} />
                                    </div>
                                    <div>
                                        <img src={Page4} />
                                    </div>
                                    <div>
                                        <img src={Page5} />
                                    </div>
                                    <div>
                                        <img src={Page6} />
                                    </div>
                                </Carousel>
                            </div>
                            <h3 className="mt-5">MATTERPORT TRUEPLAN™ FOR XACTIMATE™</h3>
                            <Row>
                                <Col lg={6}>
                                <div className="sketch-container">
                                    <img src={FirstSketch} />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                <div className="sketch-container">
                                    <img src={SecondSketch} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="water-fee-structure">
                        <div className="container">
                            <Row>
                                <Col>
                                    <div className="section-background-image">
                                        <h1 className="section-title-how-it-works-text">Contact Us</h1>
                                    </div>
                                </Col>
                            </Row>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group nogroup">
                                        <input type="text" placeholder name="name" />
                                        <div className="floating_label isFixed_false">Your Name</div>
                                    </div>
                                    <div className="form-group nogroup">
                                        <input type="text" placeholder name="name" />
                                        <div className="floating_label isFixed_false">Email</div>
                                    </div>
                                    <div className="form-group nogroup">
                                        <input type="text" placeholder name="name" />
                                        <div className="floating_label isFixed_false">Cell</div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="form-group nogroup">
                                        <textarea type="text" placeholder name="name" cols="8" rows="10" />
                                        <div className="floating_label isFixed_false">Write your message...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LandingPage;