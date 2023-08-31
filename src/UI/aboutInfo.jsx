
import './aboutInfo.css'

const AboutInfo = ({title, subtitle}) => {


  return(
    <div className="about-info-container">

      <div className="about-info-title">{title}</div>

      <hr className="about-info-line"/>

      <div className="about-info-subtitle">{subtitle}</div>

    </div>
  )
}


export default AboutInfo

