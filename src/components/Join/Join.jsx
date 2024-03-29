import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p4wd4al', 'template_bc8aim2', form.current, 'BiIwyVa2XQkphsJzo')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="">
      <div className="left-j">
      <hr/>
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>

      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="Email" name="user_email" placeholder='Enter your Email Address' />
          <button className='btn btn-j'>Join Now</button>
        </form>
       
      </div>
    </div>
  )
}

export default Join