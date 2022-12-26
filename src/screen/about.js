import React from "react";
import Img from "../Images/author.png";


const About = () =>{
    return(
        <>
    <div className="container">
    <h1>About Us</h1>
<div className="flex">
<p>
    Robert grew up in the small town of Hilo, Hawaii. He went to college at Kings Point Merchant Marine Academy in New York state. Upon graduation, Robert turned down a well-paying job with Standard Oil and chose to enlist in the Marine Corps as a helicopter pilot at the time of the Vietnam War.

After his service in the military, Robert went to work for the Xerox Corporation. His Rich Dad told him that the key to any successful business is sales. Robert rose to the #1 salesperson at Xerox. From there his entrepreneurial spirit kicked in. He created the company Rippers, along with his brother. Rippers was the first company ever to bring to market the nylon and Velcro “surfer” wallet.
    </p>

    <img src={Img}  className="authorImg"/>

</div>
    </div>
        </>
    )
}
export default About;