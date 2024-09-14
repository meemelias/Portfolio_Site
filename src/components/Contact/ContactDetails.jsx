import React,{useState} from 'react'
import './ContactStyles.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

function ContactDetails
    () {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "80f289bd-7de9-4bfc-ad7d-60537f172c63");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            alert(data.message)
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (

        <div className="container">
            <div className="section1">
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt="" />
                </div>
            </div>
            <div className="section2">
                <div className="inner1">
                    <div className="inner1content">
                        <h1>About me</h1>
                        <p>  I am currenly looking for an internship in software/techonology position. <br /> Over the summer, I was able learn
                            basics of web development. <br /> Please feel free to reach out.
                        </p>
                        <div>
                            <img src={mail_icon} alt="" /> <span>Meem.elias98@gmail.com</span>
                        </div>
                        <div>
                            <img src={call_icon} alt="" /> <span>647-862-9270</span>
                        </div>
                        <div>
                            <img src={location_icon} alt="" /> <span>Toronto, ON, Canada</span>
                        </div>

                    </div>

                </div>
                <div className="inner2">
                    <div className="inner2content">
                        <form className='contact-form' onSubmit={onSubmit} action="">

                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Enter your name...' name='name' />
                            <label htmlFor="">Your Email</label>
                            <input type="email" placeholder='Email Address...' name='email' />
                            <label htmlFor="">Your Message</label>
                            <textarea name='message' rows="8" placeholder='Your message'></textarea>
                            <button type="submit" className="contact-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
