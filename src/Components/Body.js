import React from 'react';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';

const Body = () => {
  return (
    <div>
      <div className='img-section'>
        <div className='img-container'>
          <img src={img1} alt="img1"/> 
          <div className='img-text'> 
            <p>Explore large, Destructible environments where no two games are ever the same</p>
          </div>
        </div>

        <div className='img-container'>
          <img src={img2} alt="img2"/> 
          <div className='img-text'> 
            <p>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
          </div>
        </div>

        <div className='img-container'>
          <img src={img3} alt="img3"/> 
          <div className='img-text'> 
            <p>Discover even more ways to play across thousands of creator-made game genres</p>
          </div>
        </div>
      </div>

      <div className='contribution-section'>
        <div>
          <h1 className='contribution-title'>Our Contribution</h1>
        </div>

        <div className='contribution-text'>
          <p>
            Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. 
            Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>

        <div className='contribution-insights'>
          <div>
            <h1 className='insight'>5M</h1>
            <p>Daily User Engagements</p>
          </div>

          <div>
            <h1 className='insight'>$500K</h1>
            <p>Revenue Surge for a Platform</p>
          </div>

          <div>
            <h1 className='insight'>10X</h1>
            <p>ROAS on all our marketing campaigns</p>
          </div>
        </div>
        
        <div className='contact'>
          <div>
            <h1 className='contact-title'>Interested in delving deeper into the project?</h1>
          </div>
          
          <div className='contact-details'>
            <p>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
            
            <div className='button-section'>
              <div className='button1'>
                <button className='skype-button'>Ring us on Skype</button>
              </div>
              <div className='button2'>
                <button className='contact-button'>Contact Us</button>
              </div>
            </div>
            
            <div className='copyright'>
              <p className='copyright-text'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
