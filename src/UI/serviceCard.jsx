import './serviceCard.css'


const ServiceCard = ({img, title, subtitle, date}) => {


  return(
    <div className="service-card-container">

      <img className='service-card-img' src={img} alt="serviceImg" />
      <div className="service-card-title">{title}</div>

      <hr className='service-card-line'/>

      <div className="service-card-subtitle">{subtitle}</div>
      <div className="service-card-date">год: {date}</div>

    </div>
  )
}

export default ServiceCard