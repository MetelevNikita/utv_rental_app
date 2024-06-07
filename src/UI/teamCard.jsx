import './../UI/teamCard.css'



const TeamCard = ({img, name, profession}) => {

  return(
    <div className="team-card-container" style={{width: '400px', height: '100%'}}>

      <div>

      <img className='d-flex justify-content-center align-items-center' src={img} alt="team-card-img" />

      <div className="team-card-prof">{profession}</div>
      <div className="team-card-name">{name}</div>

      </div>



    </div>
  )
}

export default TeamCard