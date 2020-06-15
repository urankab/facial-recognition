import React, { useRef } from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {

   const tiltRef = useRef(null)

   return (
      <div className='ma4 mt0'>
         <Tilt
            ref={tiltRef}
            className="Tilt br2 shadow-2"
            options={{ max: 55 }}
            style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner">
               <img src={brain} alt='brain_logo' />
            </div>
         </Tilt>
      </div>
   )
}

export default Logo