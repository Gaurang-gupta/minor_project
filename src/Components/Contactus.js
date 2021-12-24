import React, { Component } from 'react'
import './Contactus.css';
import Topcase from './Topcase';

export class Contactus extends Component {
  render() {
    return (
      <>
        <Topcase heading="Contact-Us" content={"For any query contact team using any of the following methods"} />
        <div className='contactus'>
          <div className="contactus__top">
            <div className="">
              <h2>Talk To Team</h2>
              <div>
                <div>
                  <h4>Gaurang Gupta</h4>
                  <p>For any query contact : gaurangg.ec.19@nitj.ac.in or at 7009154124. </p>
                </div>
                <div>
                  <h4>Sneha Bansal</h4>
                  <p>For any query contact : snehab.ec.19@nitj.ac.in or at 9462024689.</p>
                </div>
                <div>
                  <h4>Nimit Jain</h4>
                  <p>For any query contact : nimitj.ec.19@nitj.ac.in or at 6376389739.</p>
                </div>
              </div>
            </div>
            <div className="contactus__mail">
              <div className="contactus__mailSupport">
                <h3>Mail-Support</h3>
                <p>nitjswp@gmail.com</p>
              </div>
              <div>
                <h3>Phone-Support</h3>
                <ul className="contactus__contactsList">
                  <li>94620-24689</li>
                  <li>63763-89739</li>
                  <li>70091-54124</li>
                </ul>
              </div>
            </div>
          </div>
          <form className="contactus__newsletter">
            <h1 className="contactus__formHeading">Subscribe to newsletter</h1>
            <div className="contactus__formField">
              <p className="contactus__formFieldName">Name *</p>
              <input className="contactus__formFieldInput" type="text" required />
            </div>
            <div className="contactus__formField">
              <p className="contactus__formFieldName">Email *</p>
              <input className="contactus__formFieldInput" id="txt_email" type="email" required />
            </div>
            <button className="contactus__button" type="submit">Submit</button>
          </form>
        </div>
      </>
    )
  }
}

export default Contactus
