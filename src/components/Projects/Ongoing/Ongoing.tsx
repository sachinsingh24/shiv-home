/** @format */

import React from 'react';
import './Ongoing.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Ongoing = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },

      items: 1,
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
    <section style={{ backgroundColor: '#232741' }}>
      {/* <iframe
        title='This is a unique title'
        data-type='text/html'
        src={
          'https://drive.google.com/file/d/1b6eZ1DhZBOA8cYWXgrRmtXTEjT5AumRP/preview'
        }
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
        min-width={'100%'}
        min-height={'100%'}
        className='embed-responsive-item'
        allowFullScreen></iframe> */}
      <div className='banner-head-ongoing'>
        <img
          src={require('../../../Assets/Shiv Paradise Landing Page.png')}
          alt=''
        />
        <div className='content-head'>
          <h2>The Perfect Living Experience</h2>
          <p>
            The shortest distance between paradise and the place you call home.
            Shiv Corporation has styled a living experience in Badlapur. The 1
            BHK and 2 BHK Spacious apartments in Shiv Paradise have been
            meticulously designed to create the ultimate living experience
          </p>
          <p>
            Shiv Paradise is in a location where everything is accessible.
            Located near well-known Heaven Bell School. Here you are just 5
            minutes away from Panvel Highway, 10 minutes from Badlapur Station
            and 50 minutes away from the proposed Navi Mumbai International
            Airport
          </p>
        </div>
      </div>
      <div className='container text-center'>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          // slidesToSlide={3}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          showDots={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          keyBoardControl={false}
          centerMode={false}>
          <div className='elevation'>
            <img src={require('../../../Assets/Shiv 1.png')} alt='' />
          </div>
          <div className='elevation'>
            <img src={require('../../../Assets/Shiv 2.png')} alt='' />
          </div>
          <div className='elevation'>
            <img src={require('../../../Assets/Shiv 3.png')} alt='' />
          </div>
          <div className='elevation'>
            <img src={require('../../../Assets/Shiv 4.png')} alt='' />
          </div>
          <div className='elevation'>
            <img src={require('../../../Assets/Shiv 5.png')} alt='' />
          </div>
        </Carousel>
        <h2 className='mt-3 mb-3 text-white'>Typolopy</h2>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          // slidesToSlide={3}
          showDots={false}
          ssr={true}
          infinite={false}
          autoPlay={false}
          keyBoardControl={false}
          centerMode={false}>
          <div className='elevation'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <img
                  src={require('../../../Assets/2 BHK.png')}
                  alt=''
                  width='100%'
                  height='100%'
                />
              </div>
              <div className='col-md-6'>
                <div className='layout-details'>
                  <ul>
                    Shiv paradise 1 BHK Apartment
                    <li>Typology : 1 BHK Apartment</li>
                    <li>Carpet Area : 410 Sq.ft </li>
                    <li>Living Size : 14'9" x 9'00"</li>
                    <li>kitchen : 7'30" X 7'10"</li>
                    <li>Bedroom : 9'00" x 11'00"</li>
                    <li>Price : ₹ 26.00 Lacs</li>
                    <li className='line-through'>Price : ₹ 28.00 Lacs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='elevation'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <img
                  src={require('../../../Assets/1 BHK.png')}
                  alt=''
                  width='100%'
                  height='100%'
                />
              </div>
              <div className='col-md-6'>
                <div className='layout-details'>
                  <ul>
                    Shiv paradsdd 1 BHK Apartment
                    {/* <li>Shiv paradsdd 1 BHK Apartment</li> */}
                    <li>Typology : 1 BHK Apartment</li>
                    <li>Carpet Area : 410 Sq.ft </li>
                    <li>Living Size : 14'9" x 9'00"</li>
                    <li>kitchen : 7'30" X 7'10"</li>
                    <li>Bedroom : 9'00" x 11'00"</li>
                    <li>Price : ₹ 26.00 Lacs</li>
                    <li className='line-through'>Price : ₹ 28.00 Lacs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className='container-fluid text-center'>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          // slidesToSlide={3}
          // showDots={false}
          ssr={true}
          infinite={false}
          autoPlay={false}
          keyBoardControl={false}
          centerMode={false}>
          <div className='elevation py-3'>
            <img src={require('../../../Assets/Grounf Floor.png')} alt='' />
          </div>
          <div className='elevation py-3'>
            <img src={require('../../../Assets/First-to-seventh.png')} alt='' />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Ongoing;
