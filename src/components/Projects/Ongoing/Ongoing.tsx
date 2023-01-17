/** @format */

import React, { useRef } from 'react';
import './Ongoing.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import emailjs from '@emailjs/browser';

const Ongoing = () => {
  const responsive = {
    superLargeDesktop: {
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

  const form: any = useRef();
  // const validateSubmitForm = () => {};
  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.target.reset();
    emailjs
      .sendForm(
        'service_ko7o3uo',
        'template_xk4jqr1',
        form.current,
        'gL-UD6RKxWqo5JX-b'
      )
      .then(
        (result: any) => {
          console.log(result.text);
          window.alert('message send');
        },
        (error: any) => {
          console.log(error.text);
          window.alert('please try again...');
        }
      );
  };

  return (
    <section>
      <div className='embed-responsive-item'>
        <iframe
          title='This is a unique title'
          id='myVideo'
          data-type='text/html'
          src={
            'https://player.vimeo.com/video/790041989?h=b545046987&autoplay=1&loop=1&title=0&byline=0&portrait=0&quality=1080p&controls=1'
            // 'https://www.youtube.com/embed/Ph-KhO7HlKU?vq=hd1080&autoplay=1&loop=1&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=1&disablekb=1&mute=0&playlist=Ph-KhO7HlKU'
          }
          allow='fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
          frameBorder={'0'}></iframe>
      </div>
      <div className='banner-head-ongoing'>
        <img src={require('../../../Assets/Landing Page.png')} alt='' />
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
      <div className='container below-video-tag '>
        <div className='row justify-content-between'>
          <div className='col-md-4'>
            <div className='logo-under-add'>
              <img
                src={require('../../../Assets/Shiv Logo.png')}
                alt=''
                width={'200px'}
              />
              <p>Shirgoan, Badlapur (E) </p>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='rera_tag'></div>
          </div>
        </div>
      </div>
      <div className='container-fluid text-center'>
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
          <div className='elevation-1'>
            <img
              src={require('../../../Assets/Front Elevation.png')}
              alt=''
              className='img-fluid'
            />
          </div>
          <div className='elevation-1'>
            <img
              src={require('../../../Assets/Gate Elevation.png')}
              alt=''
              className='img-fluid'
            />
          </div>
          <div className='elevation-1'>
            <img
              src={require('../../../Assets/Inside Elevation.png')}
              alt=''
              className='img-fluid'
            />
          </div>
          <div className='elevation-1'>
            <img
              src={require('../../../Assets/Side Elevation.png')}
              alt=''
              className='img-fluid'
            />
          </div>
          <div className='elevation-1'>
            <img
              src={require('../../../Assets/Top Elevation.png')}
              alt=''
              className='img-fluid'
            />
          </div>
        </Carousel>
      </div>
      <div className='container text-center'>
        <h2 className='header-style'>Typology</h2>
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
            <div className='row'>
              <div className='col-md-6 isomatrix'>
                <img
                  src={require('../../../Assets/1 BHK.png')}
                  alt=''
                  className='img-fluid'
                />
              </div>
              <div className='col-md-6 isomatrix-details'>
                <div className='layout-details'>
                  <ul>
                    <li className='fs-2 fw-bold'>
                      Shiv Paradise 1 BHK Apartment
                    </li>
                    <li>Typology : 1 BHK Apartment</li>
                    <li>Carpet Area : 410 Sq.ft </li>
                    <li>Living Size : 14'9" x 9'0"</li>
                    <li>Kitchen : 7'3" X 7'1"</li>
                    <li>Bedroom : 9'0" x 11'0"</li>
                    <li>Price : ₹ 26.00 Lacs</li>
                    <li className='line-through'>Price : ₹ 28.00 Lacs</li>
                  </ul>
                  <h2>Available Offers :</h2>
                  <ul className='details'>
                    <li>Spot ₹ 2 Lacs Spot Discount</li>
                    <li>90% Loan Available from All Leading banks</li>
                    <li>No Additional GST, Stamp Duty & Ragistration</li>
                  </ul>
                </div>
                <button className='tag-button schedule'>
                  {' '}
                  Schedule Your Site Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className='elevation'>
            <div className='row'>
              <div className='col-md-6 isomatrix'>
                <img
                  src={require('../../../Assets/2 BHK.png')}
                  alt=''
                  className='img-fluid'
                />
              </div>
              <div className='col-md-6 isomatrix-details '>
                <div className='layout-details'>
                  <ul className='details'>
                    <li className='fs-2 fw-bold'>
                      Shiv Paradise 2 BHK Apartment
                    </li>
                    <li>Typology : 2 BHK Apartment</li>
                    <li>Carpet Area : 563 Sq.ft </li>
                    <li>Living Size : 15'0" x 9'5"</li>
                    <li>Kitchen : 7'0" X 8'6"</li>
                    <li>Bedroom : 9'0" x 10'0"</li>
                    <li>Master Bedroom : 9'0" x 11'4"</li>
                    <li>Price : ₹ 38.00 Lacs</li>
                    <li className='line-through'>Price : ₹ 40.00 Lacs</li>
                  </ul>
                  <h2>Available Offers :</h2>
                  <ul className='details'>
                    <li>Spot ₹ 2 Lacs Spot Discount</li>
                    <li>90% Loan Available from All Leading banks</li>
                    <li>No Additional GST, Stamp Duty & Ragistration</li>
                  </ul>
                </div>
                <button className='tag-button schedule'>
                  {' '}
                  Schedule Your Site Visit Now
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className='container-fluid text-center'>
        <h2 className='header-style'>Floor Layout</h2>
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
      <div className='container Amenities'>
        <h2>
          External <span>amenities</span>
        </h2>
        <p>Premium Residential Project With Modern Amenities</p>
        <div className='Amenities-1 flex-wrap '>
          <div className='image-wrap'>
            <img
              src={require('../../../Assets/Amenities/garden.png')}
              className='img-fluid'
              alt=''
            />
            <h3>GARDAN</h3>
          </div>
          <div className='image-wrap last-wrap-1'>
            <img
              src={require('../../../Assets/Amenities/sitting area.png')}
              className='img-fluid'
              alt=''
            />
            <h3>SENIOR CITIZEN AREA</h3>
          </div>
          <div className='image-wrap'>
            <img
              src={require('../../../Assets/Amenities/club house.png')}
              className='img-fluid'
              alt=''
            />
            <h3>CLUB HOUSE</h3>
          </div>
          <div className='image-wrap last-wrap-1'>
            <img
              src={require('../../../Assets/Amenities/play area.png')}
              className='img-fluid'
              alt=''
            />
            <h3>KIDS PLAY AREA</h3>
          </div>
          <div className='image-wrap'>
            <img
              src={require('../../../Assets/Amenities/jogging track.png')}
              className='img-fluid'
              alt=''
            />
            <h3>JOGGING TRACK</h3>
          </div>
          <div className='image-wrap last-wrap'>
            <img
              src={require('../../../Assets/Amenities/parking space.png')}
              className='img-fluid'
              alt=''
            />
            <h3>AMPLE CAR PARKING</h3>
          </div>
        </div>
      </div>
      <div className='container-fluid locality'>
        <div className='row'>
          <div className='col-md-7 col-sm-12'>
            <h2>
              Location <span>highlights</span>
            </h2>
            <ul>
              <p className='highlight-tag'>
                Shiv Paradise is in a location where everything is accessible.
              </p>
              <div className='row'>
                <div className='col-md-6'>
                  <li>
                    Heaven Bell School - <span>0 Km</span>
                  </li>
                  <li>
                    Gurukul Inter. School - <span>2 Km</span>
                  </li>
                  <li>
                    KilBill PreSchool - <span>1 Km</span>
                  </li>
                  <li>
                    Poddar Brio School - <span>4 Km</span>
                  </li>
                  <li>
                    Relience Smart Point - <span>1 Km</span>
                  </li>
                  <li>
                    Apollo Children Hospital - <span>800 m</span>
                  </li>
                </div>
                <div className='col-md-6'>
                  <li>
                    Ashwini Hospital - <span>800 m</span>
                  </li>
                  <li>
                    Matrix Hospital - <span>2 Km</span>
                  </li>
                  <li>
                    Central Hospital - <span>4 Km</span>
                  </li>
                  <li>
                    Badlapur Railway Station - <span>2 Km</span>
                  </li>
                  <li>
                    McDonald, KFC, Pizza Hut - <span>3 Km</span>
                  </li>
                  <li>
                    Dmart Badlapur - <span>4 Km</span>
                  </li>
                </div>
                <a
                  href={require('../../../Assets/shiv-paradise.pdf')}
                  // target='_blank'
                  className='tag-button download'
                  // rel='noreferrer'
                  download={'shiv Paradise'}>
                  Download Broucher
                </a>
              </div>
            </ul>
          </div>
          <div className='col-md-5 col-sm-12'>
            <h2>
              Location <span>Map</span>
            </h2>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.90930819408!2d73.228344814214!3d19.155446754449834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed42720c030f%3A0x5685d6da23c7c5fd!2sShiv%20Paradise!5e0!3m2!1sen!2sin!4v1673603511280!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
              width='100%'
              height='350px'></iframe>
          </div>
        </div>
      </div>
      <div className='container text-center pb-3'>
        <div className='Enquiry pb-3 pt-3'>
          <h2 className='header-style'>Enquiry Form</h2>
          <div className='enquiry-form'>
            <form id='contactForm' ref={form} onSubmit={handleSubmit}>
              <div className='form-group mb-1'>
                <label htmlFor='fname'> Full Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='fname'
                  name='from_name'
                  aria-describedby='emailHelp'
                  placeholder='Enter Your Full  Name'
                />
                {/* <small className='text-danger font-weight-bold' id='nameError'>
                  Please enter your Full name
                </small> */}
              </div>
              <div className='form-group mb-1'>
                <label htmlFor='email'> Email</label>
                <input
                  type='text'
                  className='form-control'
                  id='email'
                  name='from_email'
                  aria-describedby='emailHelp'
                  placeholder='Enter Your Email Address'
                />
                {/* <small className='text-danger font-weight-bold' id='emailError'>
                  Please Enter Your Valid Email
                </small> */}
              </div>
              <div className='form-group mb-1'>
                <label htmlFor='mobile'> Mobile No</label>
                <input
                  type='text'
                  className='form-control'
                  id='mobile'
                  name='from_subject'
                  aria-describedby='emailHelp'
                  placeholder='Enter Mobile No'
                />
                {/* <small
                  className='text-danger font-weight-bold'
                  id='mobileError'></small> */}
              </div>
              <div className='form-group mb-1'>
                <label htmlFor='Description'>Message</label>
                <textarea
                  className='form-control'
                  id='description'
                  name='message'
                  rows={3}
                  placeholder='Enter Your Message'></textarea>
              </div>
              <button
                type='submit'
                id='submitBtn'
                className='btn btn-primary mt-3'
                style={{ width: '100%' }}
                // onClick={() => validateSubmitForm}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ongoing;
