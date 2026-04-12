import React, {useRef} from 'react'
import './VideoPlayer.css'
import Videos from '/src/assets/Videos/kcs.MOV'

const VideoPlayer = ({playState, setPlayState}) => {
       
    const player = useRef (null);
    const closePlayer = (e) =>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={Videos} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer