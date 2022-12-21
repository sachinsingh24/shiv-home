/** @format */

import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import './Home.css';
import brand_logo from '../../Assets/Shiv_Paradise_Logo.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { home_carousel } from './data';
import home_banner from '../../Assets/home banner_image.svg';

const Home = () => {
  const [value, setValue] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  });
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      setValue({
        first: 35,
        second: 30,
        third: 5,
        fourth: 1000,
      });
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
      items: 5,
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
      <div className='banner-sec fluid-container'>
        <img src={home_banner} alt='' />
      </div>
      <div className='banner-tag'>
        <div className='row'>
          <div className='col-12 col-lg-12 col-sm-12'>
            <div className='tags animated fadeInLeft'>
              <img src={brand_logo} alt='' />
              <h2 className='pt-3 pb-3'>Experience The Paradise life</h2>
              <button className='tag-button'> Explore Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='funfacts-inner container'>
          <div className='row p-3'>
            <div className='col-lg-6 col-6 col-sm-6'>
              <div className='animated fadeInLeft'>
                <div className='single-funfacts'>
                  <div className='funfacts-style-two'>
                    <h3>
                      <Odometer format='d' value={value.first} />
                      <span className='fs-4'> Years</span>
                    </h3>
                    <p>Total Developing Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-6 col-sm-6'>
              <div className='animated fadeInLeft'>
                <div className='single-funfacts'>
                  <div className='funfacts-style-two'>
                    <h3>
                      <Odometer format='(,ddd).dd' value={value.second} />
                      <span className='fs-4'> +</span>
                    </h3>
                    <p>Total Completed Projects </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-6 col-sm-6'>
              <div className='animated fadeInLeft'>
                <div className='single-funfacts'>
                  <div className='funfacts-style-two'>
                    <h3>
                      <Odometer
                        format='(,ddd).dd'
                        duration={2000}
                        value={value.third}
                      />
                      <span className='fs-4'> M+ Sq.ft</span>
                    </h3>
                    <p>Total Land developed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-6 col-sm-6'>
              <div className='animated fadeInLeft'>
                <div className='single-funfacts'>
                  <div className='funfacts-style-two'>
                    <h3>
                      <Odometer
                        format='(,ddd).dd'
                        duration={2000}
                        value={value.fourth}
                      />
                      <span className='fs-4'> +</span>
                    </h3>
                    <p> Total Dedicated Units delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fluid-container carousel'>
        <h4 className='text-center m-3 head-title'>Our Completed Projects</h4>
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
          itemClass='carousel-item-padding-10-px'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass='custom-dot-list-style'>
          {home_carousel.map((item, index) => (
            <div className='card' key={index}>
              <div className='img-card'>
                <img src={item.images} alt='' />
              </div>
              <div className='testimonial mt-4 mb-4 text-center'>
                {item.testimonial}
              </div>
              <div className='name'>{item.name}</div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='container p-3'>
        <div className='row p-3'>
          <div className='col-md-6'>
            <img
              src={require('../../Assets/About us png.png')}
              alt='About-us'
              width='100%'
              height='auto'
            />
          </div>
          <div className='col-md-6 text-center p-3'>
            <img
              className='shiv_logo'
              src={require('../../Assets/Shiv Logo.png')}
              alt=''
            />
            <p className='Shiv_tag pt-3'>
              Great Things Never Come <br /> From Comfort Zones
            </p>
            <button className='tag-button shiv-btn'>About Us</button>
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
