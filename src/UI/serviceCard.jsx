import './serviceCard.css'


// img

import serviceImg from './../asset/services-card-test.png'

const ServiceCard = () => {


  return(
    <div className="service-card-container">

      <img className='service-card-img' src={serviceImg} alt="serviceImg" />
      <div className="service-card-title">Разработка интерактивных систем VR</div>

      <hr className='service-card-line'/>

      <div className="service-card-subtitle">Наша компания предоставляет услуги не только по созданию</div>
      <div className="service-card-date">год : 2023</div>

    </div>
  )
}

export default ServiceCard