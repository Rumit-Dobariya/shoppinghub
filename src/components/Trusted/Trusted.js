import Styles from './Trusted.module.scss';

export default function Trusted() {
  return (
    <div className={`${Styles.TrustedMain} brandSection`}>
      <div className='container'>
        <h3>Trusted by 1000+ Companies</h3>
        <div className={Styles.brandSectionSlider}>
          <div className={Styles.slider}>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="brand1" />
          </div>
          <div className={Styles.slider}>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="brand1" />
          </div>
          <div className={Styles.slider}>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="brand1" />
          </div>
          <div className={Styles.slider}>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png" alt="brand1" />
          </div>
          <div className={Styles.slider}>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="brand1" />
          </div>
        </div>
      </div>
    </div>
  )
}
