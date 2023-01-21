/** @format */

import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import './Home.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { home_carousel } from './data';
// import home_banner from '../../Assets/home banner_image.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [value, setValue] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  });

  const [fade, setFade] = useState('d-none');
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      setValue({
        first: 37,
        second: 35,
        third: 4.7,
        fourth: 1500,
      });
      setFade('fadeInLeft');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },

      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section>
      <div className='banner-sec fluid-container '>
        <img
          src={require('../../Assets/Home.png')}
          alt=''
          className='desktop-view'
        />
        <img
          src={require('../../Assets/Mobile View.png')}
          alt=''
          className='mobile-view d-none'
        />
      </div>
      <div className='banner-tag'>
        <div className='row'>
          <div className='col-12 col-lg-12 col-sm-12'>
            <div className='tags animated fadeInLeft'>
              <img
                src={require('../../Assets/Shiv Paradise logo.png')}
                alt=''
                className='img-fluid'
              />
              <h2 className='pt-3 pb-3'>Experience The Paradise life</h2>
              <Link to='/Project_OnGoing'>
                <button className='tag-button'> Explore Now </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='funfacts-inner container'>
        <div className='row p-3'>
          <div className='col-lg-5 col-5 col-sm-5 contain-border'>
            <div className={`animated ${fade}`}>
              <div className='single-funfacts'>
                <div className='funfacts-style-two'>
                  <h3>
                    <Odometer format='d' value={value.first} />
                    <span className='odo-text'> Years</span>
                  </h3>
                  <p>Total Developing Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-5 col-sm-5 contain-border'>
            <div className={`animated ${fade}`}>
              <div className='single-funfacts'>
                <div className='funfacts-style-two'>
                  <h3>
                    <Odometer format='(,ddd).dd' value={value.second} />
                    <span className='odo-text'>+</span>
                  </h3>
                  <p>Total Completed Projects </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-5 col-sm-5 contain-border'>
            <div className={`animated ${fade}`}>
              <div className='single-funfacts'>
                <div className='funfacts-style-two'>
                  <h3>
                    <Odometer
                      format='(,ddd).dd'
                      duration={2000}
                      value={value.third}
                    />
                    <span className='odo-text'> Lac+</span>
                  </h3>
                  <p>Total Land developed in Sq.meter</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-5 col-sm-5 contain-border'>
            <div className={`animated ${fade}`}>
              <div className='single-funfacts'>
                <div className='funfacts-style-two'>
                  <h3>
                    <Odometer
                      format='(,ddd).dd'
                      duration={2000}
                      value={value.fourth}
                    />
                    <span className='odo-text'>+</span>
                  </h3>
                  <p> Total Units delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fluid-container carousel'>
        <h4 className='text-center mt-3 head-title'>Our Completed Projects</h4>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          // slidesToSlide={3}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          rewind={true}
          renderDotsOutside={true}
          keyBoardControl={false}
          centerMode={false}
          // itemClass='carousel-item-padding-10-px'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass='custom-dot-list-style'>
          {home_carousel.map((item, index) => (
            <div className='card' key={index}>
              <div className='img-card'>
                <img src={item.images} alt='' />
              </div>
              <div className='testimonial'>
                <h5>
                  LOCATION: <span>{item.testimonial}</span>
                </h5>
              </div>
              <div className='name'>{item.name}</div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='container-fluid p-0 mt-3'>
        <div className='home-about-sec'>
          <div className='home-about-img'>
            <img
              src={require('../../Assets/About us.png')}
              alt='About-us'
              className='img-fluid'
            />
            <div className='home-about-tag'>
              <p className='Shiv_tag'>
                Great Things Never Come <br /> From Comfort Zones
              </p>
              <Link to='/About'>
                <button className='tag-button shiv-btn'>About Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// document.querySelector(document).ready(function () {
//
// });
