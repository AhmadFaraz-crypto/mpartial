import React from 'react';
import BackgroundVideo from 'react-background-video-player';

//components
import Button from '../../styledComponents/Button';

//images
import Logo from './images/logo.png';
import Video from './images/homepage.mp4';

//styles
import './style.scss'

const Header = () => {
    return (
        <div className="header-conatiner">
            <div className="navbar-container">
                <nav className="navbar navbar-expand-md">
                <div className="container">
                    <a className="martial-logo" href="/">
                        <img src={Logo} alt="logo" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="ml-auto main-navbar navbar-nav">
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Ground-Truth Data</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link active">How It Works</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Fee Structure</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Submission Portal</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Contact Us</a>
                            </li>
                            <li>
                                <Button text="Sign in" variant="primary" className="ml-4" />
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
            </div>
            <div>
               <div className="home-video-background">
                <BackgroundVideo src={Video} />
               </div>
            </div>
        </div>
    );
}

export default Header;