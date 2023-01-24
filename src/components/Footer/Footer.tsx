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
      <div className='container-fluid'>
        <div className='bottom-area'>
          <div className='row'>
            <div className='col-md-4 m-auto'>
              <div className='footer-logo'>
                <img
                  src={require('../../Assets/Shiv Logo.png')}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='address fs-6 mb-2'>
                <h4>
                  Address :{' '}
                  <span>
                    Shiv Corporation, Ground floor, Chandan Apt, Katrap Road,
                    Badlapur East.{' '}
                  </span>
                </h4>
                {/* <p>ragistration No: 164513216543 </p> */}
              </div>
            </div>
            <div className='col-md-3 m-auto'>
              <div>
                <ul className='Footer-Menu'>
                  {' '}
                  <h4>Main Links</h4>
                  <li>
                    <Link to='/'>Home</Link>{' '}
                  </li>
                  <li>
                    <Link to='/About'>About Us</Link>{' '}
                  </li>
                  <li>
                    <Link to='/Constructed'>Constructed</Link>{' '}
                  </li>
                  <li>
                    <Link to='/OnGoing'>Ongoing</Link>{' '}
                  </li>
                  <li>
                    <Link to='/Contact'>Contact Us</Link>{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-1 m-auto'>
              <div className='social-icons'>
                <img src={require('../../Assets/facebook.png')} alt='' />
                <img src={require('../../Assets/instagram (1).png')} alt='' />
                <img src={require('../../Assets/youtube.png')} alt='' />
                <img src={require('../../Assets/whatsapp.png')} alt='' />
              </div>
            </div>
            <div className='col-md-3 m-auto'>
              <div className='jpu-logo'>
                <img
                  src={require('../../Assets/JPU_Logo.png')}
                  className='img-fluid'
                  alt=''
                />
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
