import React from 'react'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { RiSpotifyLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='flex flex-row justify-center space-x-3 text-3xl px-4'>
      <a href="https://www.instagram.com/soyleischilliro/" target='_blank' rel='noreferrer'><AiOutlineInstagram /></a>
      <a href="https://open.spotify.com/show/6jtYmzIySWOJyq9N2npYmS?si=ZgG7v0_3SL2vVSCsFR_5Rg&nd=1" target='_blank' rel='noreferrer'><RiSpotifyLine /></a>
      <a href="https://www.youtube.com/channel/UCkZx7hY-whNsL2G6Ue3g5eA" target='_blank' rel='noreferrer'><AiOutlineYoutube /></a>
    </div>
  )
}

export default Footer