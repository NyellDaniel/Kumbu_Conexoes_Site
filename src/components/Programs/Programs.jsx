import React from 'react'
import './Programs.css'
import perfil from '../../assets/imgs/pop.jpg'
import perfil2 from '../../assets/imgs/pip.jpg'
import perfil3 from '../../assets/imgs/tech.jpg'
import program_icon1 from '../../assets/icones/program-icon-1.png'
import program_icon2 from '../../assets/icones/program-icon-2.png'
import program_icon3 from '../../assets/icones/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>

        <div className="program">
            <img src={perfil} alt="Kumbu Academy" className="bg"/>

            <div className="caption">
                <div className="icon-wrap">
                    <img src={program_icon1} alt="" />
                </div>

                <p>Kumbu Academy</p>
                <span>Educação e Networking para líderes financeiros</span>
            </div>
        </div>

        <div className="program">
            <img src={perfil2} alt="Kumbu Solutions" className="bg"/>

            <div className="caption">
                <div className="icon-wrap">
                    <img src={program_icon2} alt="" />
                </div>

                <p>Kumbu Solutions</p>
                <span>Gestão financeira, RH e projetos com eficiência</span>
            </div>
        </div>

        <div className="program">
            <img src={perfil3} alt="Kumbu Tech" className="bg"/>

            <div className="caption">
                <div className="icon-wrap">
                    <img src={program_icon3} alt="" />
                </div>

                <p>Kumbu Tech</p>
                <span>Digitalização e sistemas para modernizar negócios</span>
            </div>
        </div>

    </div>
  )
}

export default Programs