import Styles from './Services.module.scss';
import {TbTruckDelivery} from 'react-icons/tb';
import {GiReceiveMoney} from 'react-icons/gi';
import {MdSecurity} from 'react-icons/md';
import {RiSecurePaymentLine} from 'react-icons/ri';


export default function Services() {
  return (
    <div className={Styles.servicesMain}>
      <div className='container'>
        <div className='grid grid-three-column'>
          <div className={Styles.services1}>
						<span><TbTruckDelivery size={40} color='#8490ff' className='icon'/></span>
						<h3>Super Fast and Free Delivery</h3>
					</div>

					<div className={Styles.services2}>
						<div className={Styles.servicesColumn2}>
							<div className='d-flex align-items-center'>
								<MdSecurity size={40} color='#8490ff' className='icon'/>
								<h3>Non-contact Shipping</h3>
							</div>
						</div>
						<div className={Styles.servicesColumn2}>
							<div>
								<GiReceiveMoney size={40} color='#8490ff' className='icon'/>
								<h3>Money-back Guaranteed</h3>
							</div>
						</div>
					</div>

					<div className={Styles.services3}>
						<RiSecurePaymentLine size={40} color='#8490ff' className='icon'/>
						<h3>Super Secure Payment System</h3>
					</div>
        </div>
      </div>
    </div>
  )
}
