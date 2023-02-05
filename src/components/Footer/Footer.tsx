/** @format */

import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
      <hr />
      <div className='container-fluid'>
        <div className='bottom-area'>
          <div className='row'>
            <div className='col-md-4 m-auto mb-3'>
              <div className='footer-logo'>
                <img
                  src={require('../../Assets/Shiv Logo.png')}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='address'>
                <h4>
                  Address : Shiv Corporation, Ground floor, Chandan Apt, Katrap
                  Road, Badlapur East.
                </h4>
              </div>
            </div>
            <div className='col-md-3 m-auto'>
              <div>
                <ul className='Footer-Menu'>
                  <h4>Main Links</h4>
                  <li>
                    <Link to='/'>Home </Link>
                  </li>
                  <li>
                    <Link to='/About'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/Constructed'>Constructed</Link>
                  </li>
                  <li>
                    <Link to='/ShivParadise'>Shiv Paradise</Link>
                  </li>
                  <li>
                    <Link to='/Contact'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-1 m-auto'>
              {/* <div className='social-icons'>
                <img src={require('../../Assets/facebook (1).png')} alt='' />
                <img src={require('../../Assets/instagram (3).png')} alt='' />
                <img src={require('../../Assets/youtube.png')} alt='' />
                <img src={require('../../Assets/whatsapp (1).png')} alt='' />
              </div> */}
            </div>
            <div className='col-md-3 m-auto'>
              <div className='jpu-logo'>
                <img
                  src={require('../../Assets/JPU_Logo.png')}
                  className='img-fluid'
                  width='50%'
                  alt=''
                />
                <div className='social-icons'>
                  <img src={require('../../Assets/facebook.png')} alt='' />
                  <img src={require('../../Assets/instagram.png')} alt='' />
                  <a
                    className='m-auto'
                    href='https://wa.me/917498683100?text=hello%2C%20%0AI%20am%20interested%20in%20Shiv%20Paradise%20Please%20Share%20me%20More%20Details'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={require('../../Assets/whatsapp.png')} alt='' />
                  </a>
                  <img
                    src={require('../../Assets/youtube.png')}
                    alt=''
                    width='50px'
                    height='40px'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='CopyRight mx-auto'>
        <div className='row align-item-center'>
          <div className='col-6 text-start'>
            <p>Copyright@2023 Shiv Corporation All Rights reserved</p>
          </div>
          <div className='col-6 text-end'>
            <p>Developed by Multifly technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
