import React from 'react'
import NavScrollExample from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
export default function Home() {
  return (
    <div>
      <NavScrollExample/>
      <Banner/>
      <Categories/>
      <Footer/>
    </div>
  )
}
