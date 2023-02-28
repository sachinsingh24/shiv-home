/** @format */

import React, { useRef, useState } from 'react';
import './PopupForm.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';

const PopupFrom = (props: any) => {
  // const [selectedOption, setSelectedOption] = useState('1 BHK');

  // const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedOption(event.target.value);
  // };
  // const [value, setValue] = useState('');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  //   console.log(value);

  // onchange(event.target.value);
  //};
  const [file, setFile] = useState<Blob | null>(null);

  const handleClick = async () => {
    const response = await fetch('../../../Assets/shiv-paradise.pdf');
    const data = await response.blob();
    setFile(data);
  };

  const handleDownload = () => {
    if (!file) {
      return;
    }

    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'shiv paradise.pdf';
    document.body.appendChild(link);
    link.click();
    setFile(null);
  };
  const form: any = useRef();
  // const validateSubmitForm = () => {};
  const handleSubmit = (event: any) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'shivhome_formid',
        'template_tjqs146',
        form.current,
        'gf8rXDhegAr-dVvvL'
      )
      .then(
        (result: any) => {
          console.log(result.text);
          window.alert(
            'Thank you for submitting the form. Your submission has been received and is being processed, Our team will connect with You as soon as possible'
          );
        },
        (error: any) => {
          console.log(error.text);
          window.alert('please try again...');
        }
      );
    event.target.reset();
  };
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Please fill out this form to Schedule your site visit.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          id='contactForm'
          className='popup-form'
          ref={form}
          onSubmit={handleSubmit}>
          <div className='form-group mb-1'>
            <label htmlFor='fname'> Full Name</label>
            <input
              type='text'
              className='form-control'
              id='fname'
              name='from_name'
              aria-describedby='nameHelp'
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
              type='number'
              className='form-control'
              id='mobile'
              name='from_mobile'
              aria-describedby='mobileHelp'
              placeholder='Enter Mobile No'
            />
            {/* <small
                  className='text-danger font-weight-bold'
                  id='mobileError'></small> */}
          </div>
          <div className='form-group mb-1'>
            <label htmlFor='date'>Prefer Date For Your Site Visit</label>
            <input
              className='form-control'
              id='date'
              type='date'
              name='Date'
              // value={value}
              // onChange={handleChange}
            />
          </div>
          <div className='form-group mb-1'>
            <label htmlFor='radio-btn'>Typology required</label>{' '}
            <div className='form-control radio-wrap'>
              <div>
                <label>1 BHK </label>{' '}
                <input
                  className='radio-btn'
                  type='radio'
                  value='1 BHK'
                  id='radio-btn'
                  name='required'
                  checked
                />
              </div>
              <div>
                <label>2 BHK </label>{' '}
                <input
                  className='radio-btn'
                  type='radio'
                  value='2 BHK'
                  name='required'
                />
              </div>
            </div>
          </div>
          <div className='popup-btn'>
            <Button className='btn btn-secondary' onClick={props.onHide}>
              Close
            </Button>
            <Button
              type='submit'
              id='submitBtn'
              className='btn btn-primary'
              onClick={handleClick}>
              Submit
            </Button>
            {file && (
              <Button
                variant='success'
                onClick={handleDownload.bind(null).bind(null, props.onHide)}>
                Download brochure
              </Button>
            )}
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default PopupFrom;
