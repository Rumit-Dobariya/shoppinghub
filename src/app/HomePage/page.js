import Styles from "./HomePage.module.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Services/Services";
import Trusted from "../../components/Trusted/Trusted";
import { useProductContext } from '@/context/ProductContext';
import FeatureProducts from '@/components/FeatureProducts/FeatureProducts';

export default function page() {

  const {myName} = useProductContext();

  return (
    <div className={Styles.pageMain}>
      <HeroSection />
      <FeatureProducts />
      <Services />
      <Trusted />
    </div>
  )
}