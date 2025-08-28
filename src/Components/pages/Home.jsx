import React from 'react'
import Herosection from '../Pagecomponent/Home/Herosection'
import WordpressSection from '../Pagecomponent/Home/Awsome'
import Awsome from '../Pagecomponent/Home/Awsome'
import Testimonial from '../Pagecomponent/Home/Testimonial'
import Blog from '../Pagecomponent/Home/Blog'
import Insta from '../Pagecomponent/Home/Insta'
import Card from '../../Ui/Card'

function Home() {
  return (
    <div>
        <Herosection/>
        <Awsome/>
        <Card/>
        <Testimonial/>
        <Blog/>
        <Insta/>
    </div>
  )
}

export default Home