import React from "react";
import images from "./images/img1.avif"
import { IoPricetagOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import './project.css';
  import { render } from "@testing-library/react";
  

function Our(){

    return(
        
        <div className="program">
            <h4>EXPLORE OUR PROGRAM</h4>
            <div className="Servicess"> 


<div className="service">
<h4> < LiaCertificateSolid/> <br></br><br></br><p>Certification</p></h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ratione eum enim natus consectetur sequi fugiat doloremque saepe rerum aperiam laboriosam!</p>
<p className="see">See More &gt; </p>
</div>

<div className="service">

<h4> <IoPricetagOutline/> <br></br><br></br><p>Pricing</p></h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione eum enim natus consectetur sequi fugiat doloremque saepe rerum aperiam laboriosam!</p>
    <p className="see" >See More &gt; </p>
    
    </div>

    <div className="service">
    <h4><GoBook/> <br></br><br></br> <p>Programs</p></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ratione eum enim natus consectetur sequi fugiat doloremque saepe rerum aperiam laboriosam!</p>
      
        <p className="see" >See More &gt; </p>
        </div>
    </div> 

        </div>
       
    )
}

export default Our;