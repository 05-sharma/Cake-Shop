import React from 'react'

import About2 from '../Pagecomponent/About/About2'
import Awsome from '../Pagecomponent/Home/Awsome'
import Testimonial from '../Pagecomponent/Home/Testimonial'
import Blog from '../Pagecomponent/Home/Blog'
import Insta from '../Pagecomponent/Home/Insta'


function About() {
  return (
    <div>
        <About2/>
        <Awsome/>
        <Testimonial/>
        <Blog/>
        <Insta/>
        
    </div>
  )
}

export default About