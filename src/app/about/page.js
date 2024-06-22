import HeroSection from '@/components/HeroSection/HeroSection'
import React from 'react';
import Styles from "./About.module.scss";

export default function page() {
  return (
    <div className={Styles.pageMain}>
      <HeroSection headerName="Patel Ecommerce"/>
    </div>
  )
}
