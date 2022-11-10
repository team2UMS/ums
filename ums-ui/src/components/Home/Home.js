import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet, Link } from "react-router-dom";
// import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
 
}
from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Home() {
    
      return (
        <>
         {/* <div className='justify-content-center'>
        <div style={{ display: "block", width: 1500, padding: 30 }}>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
        <Carousel.Item interval={3500}>
          <div className='bg-image'>
            <img className="w-100" src="https://www.willclaim.com/wp-content/uploads/2016/10/money-800x300.jpg" alt="Image One"/>
            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} ></div>
          </div>
          <Carousel.Caption>
            <h3>GLOBAL BANK</h3>
            <p>
              The Gloabal Bank Corporation is an American multinational investment bank and financial services
              holding company headquartered at the Bank of America Corporate
              Center in Charlotte, North Carolina. The bank was founded in San
              Francisco and took its present form when NationsBank of Charlotte
              acquired it in 1998. It is the second-largest banking institution
              in the United States, after JPMorgan Chase, and the second largest
              bank in the world by market capitalization. Bank of America is one
              of the Big Four banking institutions of the United States.[4] It
              serves approximately 10.73% of all American bank deposits, in
              direct competition with JPMorgan Chase, Citigroup, and Wells
              Fargo. Its primary financial services revolve around commercial
              banking, wealth management, and investment banking.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img className="d-block" width={1500} height={540} src="https://img.freepik.com/premium-photo/cash-hundred-dollar-bills-dollar-background-one-hundred-us-banknotes-are-scattered-background_76263-2299.jpg?w=2000" alt="Image Two" />

        </Carousel.Item>
      </Carousel>
    </div>
    </div> */}
<div className='row justify-content-center'>
<Card style={{ width: '50rem', marginTop:'20px', height:'50rem' }} >
     
      <Card.Body><div style={{ textAlign :'center' }}>
        <Card.Title>GlobalBank</Card.Title>
        <Card.Text>
        The Gloabal Bank Corporation is an American multinational investment bank and financial services
              holding company headquartered at the Bank of America Corporate
              Center in Charlotte, North Carolina. The bank was founded in San
              Francisco and took its present form when NationsBank of Charlotte
              acquired it in 1998. It is the second-largest banking institution
              in the United States, after JPMorgan Chase, and the second largest
              bank in the world by market capitalization. Bank of America is one
              of the Big Four banking institutions of the United States. It
              serves approximately 10.73% of all American bank deposits, in
              direct competition with JPMorgan Chase, Citigroup, and Wells
              Fargo. Its primary financial services revolve around commercial
              banking, wealth management, and investment banking.
        </Card.Text>
        
        <Button variant="primary"><Link to="/Login"><div className='text-white'>Login</div></Link></Button> 
        
      </div></Card.Body>

      <div className='justify-content-center'>
        <div style={{ display: "block", padding: 30 }}>

      <Carousel>
        <Carousel.Item interval={500}>
          <div className='bg-image'>
            <img className="w-200 h-200" src="https://media.istockphoto.com/id/173932685/photo/bank.jpg?s=612x612&w=0&k=20&c=wk4PK5H6PowQ2u5Kmg9eLLeizlypOnSHnN2y-071KW4=" alt="Image One"/>
            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} ></div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block" width={1000} src="https://img.freepik.com/premium-photo/cash-hundred-dollar-bills-dollar-background-one-hundred-us-banknotes-are-scattered-background_76263-2299.jpg?w=2000" alt="Image Two" />

        </Carousel.Item>

        
        <Carousel.Item interval={500}>
          <img className="d-block" width={800} height={400} src="https://i.pinimg.com/originals/68/10/56/68105623c1210fb2353894aa60c7c09c.jpg" alt="Image Two" />

        </Carousel.Item>
      </Carousel>
    </div>
    </div> 
    </Card>
    </div>

    {/* <div className='justify-content-center'>
        <div style={{ display: "block", width: 150, padding: 30 }}>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
        <Carousel.Item interval={3500}>
          <div className='bg-image'>
            <img className="w-100" src="https://www.willclaim.com/wp-content/uploads/2016/10/money-800x300.jpg" alt="Image One"/>
            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} ></div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img className="d-block" width={150} height={150} src="https://img.freepik.com/premium-photo/cash-hundred-dollar-bills-dollar-background-one-hundred-us-banknotes-are-scattered-background_76263-2299.jpg?w=2000" alt="Image Two" />

        </Carousel.Item>
      </Carousel>
    </div>
    </div>  */}
        <Footer/>
        </>
      );
    }
    export default Home;