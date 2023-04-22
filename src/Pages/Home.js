import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import CourseBlock from '../Components/CourseBlock'
import Admission from '../Components/Admission'

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <CourseBlock/>
      <Admission />
    </div>
  )
}

export default Home