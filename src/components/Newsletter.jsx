import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
const Newsletter = () => {
    const form =useRef()

    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm('service_cn99oxi', 'template_x8i5nkd', form.current, '7GYfRZcvdQfUyEibT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
    <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
        <div className="mb-4 mb-xl-0">
            <div className="fs-3 fw-bold text-white">New products, delivered to you.</div>
            <div className="text-white-50">Sign up for our newsletter for the latest updates.</div>
        </div>
        <div className="ms-xl-4">
                <form ref={form}onSubmit={sendEmail}>
            <div className="input-group mb-2">

                <input className="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                <button className="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>
            </div>
                </form>
            <div className="small text-white-50">We care about privacy, and will never share your data.</div>
        </div>
    </div>
</aside>
  )
}

export default Newsletter