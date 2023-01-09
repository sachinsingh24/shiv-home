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
      <div className='container'>
        <div className='bottom-area'>
          <div className='row'>
            <div className='col-6 col-md-6 col-sm-12'>
              <img
                src={require('../../Assets/Shiv Logo.png')}
                width='250px'
                alt=''
              />
            </div>
            <div className='col-3 col-md-3 col-sm-12 text-light'>
              <div>
                <ul className='Footer-Menu'>
                  {' '}
                  <h4>Navigation</h4>
                  <li>
                    <Link to='/'>Home</Link>{' '}
                  </li>
                  <li>
                    <Link to='/About'>About</Link>{' '}
                  </li>
                  <li>
                    <Link to='/Project_completed'>Completed Projects</Link>{' '}
                  </li>
                  <li>
                    <Link to='/Project_OnGoing'>Ongoing Projects</Link>{' '}
                  </li>
                  <li>
                    <Link to='/Contact_Us'>Contact Us</Link>{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-3 col-md-3 col-sm-12'>
              <div className='social-icons'>
                <img
                  src={require('../../Assets/facebook.png')}
                  className='mt-3'
                  alt=''
                />
                <img src={require('../../Assets/instagram (1).png')} alt='' />
                <img src={require('../../Assets/youtube.png')} alt='' />
                <img src={require('../../Assets/whatsapp.png')} alt='' />
              </div>
            </div>
          </div>
          <div className='address'>
            <p>
              Address : Shiv Corporation, Ground floor, Chandan Apt, Katrap
              Road, Badlapur East{' '}
            </p>
            <p>ragistration No: 164513216543 </p>
          </div>
        </div>
      </div>
      <div className='CopyRight mx-auto'>
        <div className='row align-item-center'>
          <div className='col-6 text-start'>
            <p>Copyright@2023 Shiv Corporation All Rights reserved</p>
          </div>
          <div className='col-6 text-end'>
            <p>developed by Multifly technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
