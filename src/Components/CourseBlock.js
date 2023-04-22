import React from 'react'
import './CourseBlock.css'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ConstructionIcon from '@mui/icons-material/Construction';
import DevicesIcon from '@mui/icons-material/Devices';

const CourseBlock = () => {
  return (
    <div className='course-block'>
        <div className='course-block-title'>COURSES OFFERED</div>
        <div className='course-block-content'>
            <div className='course-block-element'>
                <PrecisionManufacturingIcon />
                MECHANICAL ENGINEERING
            </div>  
            <div className='course-block-element'>
              <ConstructionIcon />
              CIVIL ENGINEERING
            </div>  
            <div className='course-block-element'>
              <DevicesIcon/>
              COMPUTER ENGINEERING
            </div>  
        </div>
    </div>
  )
}

export default CourseBlock