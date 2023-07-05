import React from "react";
import images from "./images/img1.avif"


import './project.css';
  import { render } from "@testing-library/react";
  import Button from 'react-bootstrap/Button';

function Home(){

    return(
        <div className="home">

        <div className="homeleft">
        <h4>
                Build Your Carrier With Senchola
        </h4>
        <p>
            Welcome to Lagos High school where raising self <br></br>
            reliant and god-fearing children is our goals.
        </p>
            <Button variant="success" href="">Learn More</Button>{' '}
        </div >

        <div className="homeright">      
             <img src={images} alt=""/>
        </div>

        </div>
       
    )
}

export default Home;