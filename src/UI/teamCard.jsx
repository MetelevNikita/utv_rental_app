import './../UI/teamCard.css'



const TeamCard = ({img, name, profession}) => {

  return(
    <div className="team-card-container">

      <img className='team-card-img' src={img} alt="team-card-img" />


      <div className="team-card-prof">{profession}</div>
      <div className="team-card-name">{name}</div>

    </div>
  )
}

export default TeamCard