import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86fa2ffb-f201-480d-8832-81cbdc6276b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch with me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Connect</h1>
            <p>I’m currently available for new projects and would be happy to collaborate with you. If you have an idea or task in mind, feel free to reach out—I’d love to hear from you. You can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>oreoluwalawanson@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+2348112873867</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Lagos, Nigeria</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit }className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your full name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Message</label>
            <textarea name="message"rows="8" placeholder='Enter your message...'></textarea>
            <button type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
