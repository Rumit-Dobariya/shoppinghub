import React from "react";
import Styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className={Styles.contactShort}>
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>talk to us today</h3>
          </div>
          <NavLink to="/contacts">
            <Button name="Contact Us" />
          </NavLink>
        </div>
      </section>

      <footer className={Styles.footerMain}>
        <div className="container grid grid-four-column">
          <div className={Styles.FooterAbout}>
            <h3>Patel's Collection</h3>
            <p>lorem ipsum dolor, sit amet consectetur elit.</p>
          </div>

          <div className={`${Styles.footerSubscribe} d-flex flex-column`}>
            <h3>Subscribed to get important updates</h3>
            <form className="d-flex flex-column" action="">
              <input type="email" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className={Styles.footerSocial}>
            <h3>Follow Us</h3>
            <div className={Styles.footerSocialIcon}>
              <span>
                <FaDiscord className="icons" />
              </span>
              <span>
                <FaInstagram className="icons" />
              </span>
              <span>
                <a href="https://www.youtube.com/@rumitdobariya7978" target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </span>
            </div>
          </div>

          <div className={Styles.footerContact}>
            <h3>Call Us</h3>
            <a href="tel: 6355032203">+91 6355032203</a>
          </div>
        </div>

				<div className={Styles.footerBottomSection}>
					<hr />
					<div className="container grid grid-two-column">
						<p>@{new Date().getFullYear()} Patel's Collection. All Rights Reserved</p>
						<div>
							<p>PRIVACY POLICY</p>
							<p>TERMS & CONDITIONS</p>
						</div>
					</div>
				</div>
      </footer>
    </>
  );
}
