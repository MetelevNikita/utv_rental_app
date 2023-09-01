import './../UI/teamCard.css'

// img

import teamCardImg from './../asset/team-card-test.png'

const TeamCard = () => {

  return(
    <div className="team-card-container">

      <img className='team-card-img' src={teamCardImg} alt="team-card-img" />


      <div className="team-card-prof">Дизайнер</div>
      <div className="team-card-name">Денис Петров</div>

    </div>
  )
}

export default TeamCard