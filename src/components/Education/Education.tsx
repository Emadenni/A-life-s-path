import React from 'react'
import Frame from '../Frame/Frame'
import ".//education.scss";
import educaionIcon from "../../assets/images/educationIcon.png"

type Props = {}

const Education = (props: Props) => {
  return (
  <div className='education-wrapper'>
   <Frame borderColor="  rgba(191, 25, 25, 0.02)" backgroundColor="  rgba(191, 25, 25, 0.04)" title="Education" textDecorationColor="#bf191999" />
   <div className='education-container'>
    <img src={educaionIcon} alt="ed-icon" />
   </div>
   </div>
  )
}

export default Education