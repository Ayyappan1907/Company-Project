import React from 'react';
import Button from 'react-bootstrap/Button';
import './project.css';
import { TbBooks } from "react-icons/tb";
import { ILiaBusinessTimeSolid } from "react-icons/lia";


function Expert(){
    
    return(
       
       <div className='expert'>
        
<div  className='expertleft'>
    <h4>
        Expert Talent with <br></br>
        Curated Resourse <br></br>
        & Support
    </h4>
    <p>
        We have the best facilities to ensure that <br></br>
        students have the best experience while <br></br>
        learning.We believe that practicals helps in <br></br>
        fast learning.
    </p>
    <Button variant="success" href="">SEE MORE</Button>{' '}

</div>

<div className='expertright'>

    <div className='good'>
        <p><b><TbBooks/><br></br>Good Infrastructure</b></p>
        <p>We have the best facilities to ensure that <br></br>
        students have the best experience while <br></br>
        learning.</p>
    </div>

    <div className='bussiness'>
        <p><b><LiaBusinessTimeSolid/><br></br>Bussiness</b></p>
        <p>We have the best facilities to ensure that <br></br>
        students have the best experience while <br></br>
        learning.</p>
    </div>

</div>

       
       </div>
    )
}

export default Expert;