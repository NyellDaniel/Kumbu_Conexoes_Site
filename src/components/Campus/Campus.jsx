import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/imgs/ant.jpg'
import gallery_2 from '../../assets/imgs/dic.jpg'
import gallery_3 from '../../assets/imgs/eqp.jpg'
import gallery_4 from '../../assets/imgs/acd.jpg'
import white_arrow from '../../assets/icones/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>

        <div className="gallery">
            <img src={gallery_1} alt="Networking empresarial" />
            <img src={gallery_2} alt="Eventos Kumbu" />
            <img src={gallery_3} alt="Reuniões estratégicas" />
            <img src={gallery_4} alt="Ambiente corporativo" />
        </div>

        <a 
          href="https://www.instagram.com/kumbuconexoes" 
          target="_blank" 
          rel="noopener noreferrer"
          className='btn dark-btn'
        >
          Ver mais 
          <img src={white_arrow} alt=''/>
        </a>

    </div>
  )
}

export default Campus