import React from 'react'

// 

import { motion } from 'motion/react'

// css

import './MyButtonMotion.css'


const MyButtonMotion = ({text, onClick}) => {
  return (
    <motion.button whileHover={{background: 'linear-gradient(260deg, #00B0E1 10.52%, #1E4FC6 91.43%)', border: '1px solid rgba(255, 255, 255, 0)'}} className='myBtn' onClick={onClick}>{text}</motion.button>
  )
}

export default MyButtonMotion