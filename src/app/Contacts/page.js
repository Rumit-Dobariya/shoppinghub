import React from "react";
import Styles from "./Contact.module.scss";

export default function page() {
  return (
    <div className={Styles.contactMain}>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7402.970589973574!2d70.49302339118198!3d21.915887419859008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395826c6cc15318f%3A0xace54a050aded87!2sBoria%2C%20Gujarat%20360405!5e0!3m2!1sen!2sin!4v1718443174655!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>

      <div className={Styles.container}>
        <div className={Styles.contactForm}>
          <form className={Styles.contactInputs} action="https://formspree.io/f/mrgnnojl" method="POST">
            <input 
              type="text" 
              placeholder="User Name" 
              name="userName"
              required
              autoComplete="off"
            />
            <input 
              type="email" 
              placeholder="Email" 
              name="email"
              required
              autoComplete="off"
            />
            <textarea 
              placeholder="Enter Your Message" 
              name="message"
              required
              autoComplete="off"
              cols={30}
              rows={10}
            />
            <input type="submit" value="Send" /> 
          </form>
        </div>
      </div>
    </div>
  );
}
