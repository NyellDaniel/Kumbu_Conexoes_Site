import React from 'react'
import './Programs.css'
import perfil from '../../assets/imgs/photoCorreia.jpg'
import perfil2 from '../../assets/imgs/photoCorreia.jpg'
import perfil3 from '../../assets/imgs/photoCorreia.jpg'
import program_icon1 from '../../assets/icones/program-icon-1.png'
import program_icon2 from '../../assets/icones/program-icon-2.png'
import program_icon3 from '../../assets/icones/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program" >
            <img src={perfil} alt=''/>
            <div className="caption">
                <img src={program_icon1} alt=''/>
                <p>Nossos programas</p>
            </div>
        </div>
        <div className="program">
            <img src={perfil2} alt=''/>
            <div className="caption">
                <img src={program_icon2} alt=''/>
                <p>Nossos programas</p>
            </div>
        </div>
        <div className="program">
            <img src={perfil3} alt=''/>
            <div className="caption">
                <img src={program_icon3} alt=''/>
                <p>Nossos programas</p>
            </div>
        </div>
        </div>
  )
}

export default Programs
