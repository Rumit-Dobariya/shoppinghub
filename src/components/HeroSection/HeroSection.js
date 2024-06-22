import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Image from "next/image";
import Styles from "./HeroSection.module.scss";
import Link from "next/link";

export default function HeroSection(props) {

	const { headerName= "Patel's Store" } = props;

  return (
    <div className={Styles.heroMainOuter}>
      <div className="container">
        <div className="grid grid-two-column">
          <div className={Styles.heroSectionData}>
            <p className={Styles.introData}>Welcome to </p>
            <h1>{headerName}</h1>
            <p>
              We are a team of talented developers making websites and apps. We
              are based in India and have been working with clients from all
              over the world.
            </p>
            <Link href="/shop">
              <Button name="Shop Now" />
            </Link>
          </div>
          <div className={Styles.heroSectionImage}>
            <figure>
              <Image
								height={400}
								width={500}
                src="/images/hero.jpg"
                alt="Hero Image"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
