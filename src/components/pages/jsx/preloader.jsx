import './../css/preloader.css'

//


import { useState } from 'react'


//

import preloaderGif from './../../../asset/final-animation-alpha.gif'

const Preloader = () => {

  const [fade, setFade] = useState(['preloader-container preloader-fade'])


  return (

    <div className={fade}>


        <div className="preloader-blur"></div>
        <img className='preloader-logo' src={preloaderGif} alt="preloader" />
        <div className="preloader-bg"></div>


    </div>



  )
}

export default Preloader