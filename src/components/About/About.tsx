/** @format */

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './About.css';

const About = () => {
  const accod = [
    {
      head: 'A Comprehensive Approach to Real Estate',
      panel:
        'With our extensive network of resources and experienced team, we provide you with the highest level of service and expertise in helping you find the perfect property. We offer custom-tailored solutions for investors, home owners, and renters alike',
    },
    {
      head: 'Expert Advice from Professionals',
      panel:
        'We offer expert advice on every step of your real estate journey. Our experienced professionals are dedicated to providing you with professional advice and knowledge that can help you make the right decisions.',
    },
    {
      head: 'Unparalleled Customer Service',
      panel:
        'At JPU Group, our top priority is to ensure satisfaction for all our clients. We strive to provide exceptional customer service and support throughout all stages of your property search or purchase.',
    },
  ];
  return (
    <section className='bg-white about_us-p'>
      <div className='container About-tag-sec '>
        <div className='text-center '>
          <img
            src={require('../../Assets/JPU-Logo.png')}
            alt=''
            width='250px'
            className='mb-3'
          />
        </div>

        <h2>About JPU GROUP</h2>
        <p>
          It has been 37 years since our journey began in 1986, when we ventured
          into the real estate sector, initially with humble beginnings as
          labourers, then as contractors and eventually working our way up to
          launch our own real estate projects. Since then, we had completed over
          90 projects in the MMR Region and have an overall experience of 5
          million square feet of development along the central suburbs of Thane,
          Dombivli, Kalyan, Ambarnath and in the Navi Mumbai nodes of Kharghar,
          Kamothe, Karanjade and Panvel.. Our team comprises of a combination of
          experienced professionals with grassroots experience in all the
          segments of real estate including design, planning, finance and
          infrastructure construction. We have witnessed the initial expansion
          of Mumbai and the MMR region and are also witness to the changing
          trends and expectations of the new age young and dynamic professionals
          representing the taste and aspirations of the newer generations. The
          reference of existing customers has become the leading sales pitch for
          the group and which the group has proudly embraced as the hallmark of
          identity as a successful developer.
        </p>
        <h2>A Vision</h2>
        <p>
          At JPU Group, we are dedicated to providing our clients with the
          highest quality real estate services, from start to finish.
        </p>
        <h2>Mission</h2>
        <p>
          Our mission is to ensure that each project is completed with the
          utmost care and attention to detail.
        </p>
      </div>
      <h2 className='text-center mt-3'>Why Choose Us</h2>
      <div className='container col-md-6 mt-3 mb-3'>
        <Accordion allowZeroExpanded>
          {accod.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.head}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.panel}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default About;
