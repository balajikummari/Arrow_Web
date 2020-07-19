import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import likeIcon from '../../assets/like.png';
import userIcon from '../../assets/user.png';
import yearIcon from '../../assets/balloon.png';
import smileIcon from '../../assets/smile.png'
class HomePage extends Component {
    render() {
        return (
            <div className="home-div">
                <div className="get-started-div">
                    <div className="container">
                    <h1>Get your bussiness Mobile while having coffee</h1>
                    <p>evlo is a low code, easy to use platform and app as a service using which any business
                        owner can get a fully functional, white labeled mobile e-commerce application 
                        for their business in less than minutes. 
                        One can add products, manage orders without any technical expertise</p>
                    <button className="button white-button"> <Link to="/customization" className="get-started-link"> Get Started</Link></button>
                    </div>
                </div>
                <div className="testimonials container">
                    <div className="testimonials-heading"><h1>Why evlo</h1></div>
                    <div className="step">
                        <h3>No Movement</h3>
                        <p>You do not need to go any where to to pull your business in to online</p>
                    </div>
                    <div className="step">
                        <h3>Low Cost</h3>
                        <p>You will pay less amount than you pay in the market for same product. As we use google sheets, it would cost you nothing other than serving your purpose</p>
                    </div>
                    <div className="step">
                        <h3>No Expertise</h3>
                        <p>You do not need any technical support resource, as it is easy to enter your data in sheets, the same way as you do on the paper </p>
                    </div>
                </div>
                <div className="achievements">
                    <div className="container">
                        <div className="achmt-inner">
                        <div className="achievement">
                        <div className="icon">
                            <h2>78</h2>
                            {/* <img src={likeIcon} ></img> */}
                        </div>
                        <h4>Likes</h4>
                        </div>
                        <div className="achievement">
                        <div className="icon">
                            {/* <img src={userIcon} ></img> */}
                            <h2>123</h2>
                        </div>
                        <h4>Users</h4>
                        </div>
                        <div className="achievement">
                        <div className="icon">
                            <h2>1</h2>
                            {/* <img src={yearIcon}></img> */}
                        </div>
                        <h4>Years</h4>
                        </div>
                        <div className="achievement">
                        <div className="icon">
                            <h2>100</h2>
                            {/* <img src={smileIcon} ></img> */}
                        </div>
                        <h4>Smiles</h4>
                        </div>
                        </div>
                        </div>
                    </div>
                <div className="app-use-div container">
                <div className="use-app-heading"><h1>How to get</h1></div>
                    <div className="use-step">
                        <h3>Step 1</h3>
                        <p>Register yourself from 'Get Started'. Provide your basic details that's it.</p>
                    </div>
                    <div className="use-step">
                        <h3>Step 2</h3>
                        <p>Fill your list of products in Google Sheet as per the template provided.</p>
                    </div>
                    <div className="use-step">
                        <h3>Step 3</h3>
                        <p>In next few minutes your Store management mobile application is ready and you can download it.</p>
                    </div>
                    <div className="use-step">
                        <h3>Step 4</h3>
                        <p>Also download customer mobile application from the link provided and your customers can place orders</p>
                    </div>
                    </div>
            </div>
        );
    }
}
export default HomePage;