import Head from 'next/head'
import Hero from '../components/Homepage/Hero'
import Cookingabout from '../components/Homepage/Cookingabout'
import Brand from '../components/Homepage/Brand'
import Ebook from '../components/Homepage/Ebook'
import Course from '../components/Homepage/Course'
import Cookingfundamentals from '../components/Homepage/Cookingfundamentals'
import Event from '../components/Homepage/Event'
import Testimonial from '../components/Homepage/Testimonial'
import Instagram from '../components/Homepage/Instagram'
import Secretcook from '../components/Homepage/Secretcook'

export default function Home() {
  return (
      <div>
          <Hero />
          <Cookingabout />
          <Brand />
          <Ebook />
          <Course />
          <Secretcook />
          <Cookingfundamentals />
          <Event />
          <Testimonial />
          <Instagram />
      </div>
  )
}
