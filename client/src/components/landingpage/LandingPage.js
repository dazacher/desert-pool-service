import React from "react";
import PoolImage from "../../assets/images/gunite-spa-inground-pool.jpg";
import PoolImage2 from "../../assets/images/GazeboPool.jpg";
import PoolImage3 from "../../assets/images/WadingPool.jpg";
import { MDBRow, MDBCol } from 'mdbreact';
import "./LandingPage.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function LandingPage() {
    return (
        <>
            <MDBRow>
                <MDBCol lg="12" className="text-center">
                <div data-aos="flip-left">
                    <img
                        src={PoolImage}
                        alt="Granite Spa Inground Pool"
                        width="100%"
                        height="100%"
                    ></img></div>
                </MDBCol>
               
            </MDBRow>
            
            <MDBRow>
                <MDBCol lg="6" className="imageBKGR">

                    <h3>Chemicals</h3>
                    <ul>
                        <li><h5>We use the highest professional grade chemicals available each week at every pool.</h5></li>
                        <li><h5>You've heard the phrase "one size fits all" most likely, but unfortunately that's not always the case. That's especial true when it comes to keeping water balanced and the amount of chemical and time to make that happen. Your pool is a large investment, would you want a handyman to take care it that kind of knows what they're doing? Or do you want a professional that will be honest with how much it's going to cost, and take the time to care for that body of water, it's equipment, and keep your family safe?.</h5></li>
                    </ul>

                </MDBCol>
                <MDBCol lg="6" fluid="true" className="text-center">
                <div data-aos="flip-left">
                    <img
                        src={PoolImage2}
                        alt="Gazebo Pool"
                        width="100%"
                        height="100%"
                    ></img></div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol lg="6" className="text-center">
                <div data-aos="flip-left">
                    <img
                        src={PoolImage3}
                        alt="Wading Pool"
                        width="100%"
                        height="100%"
                        padding-top="10"
                    ></img></div>
                </MDBCol>
                <MDBCol lg="6" className="imageBKGR">
                    <ul>
                        
                        <h3>Weekly service includes</h3>

                        <li><h5>Brushing walls and steps</h5></li>

                        <li><h5>Empty all baskets</h5></li>

                        <li><h5>Balance chemical</h5></li>

                        <li><h5>Skim debris from pool floor and surface</h5></li>

                        <li><h5>Check equipment</h5></li>
                    </ul>
                </MDBCol>
                <MDBCol lg="12" className="footer">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h5 className="footer"> @copyright 2020. All rights Reserved</h5>
              
                </MDBCol>
            </MDBRow>
        </>
    )
};


export default LandingPage; 