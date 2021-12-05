import React from 'react'
import Annoucement from '../components/Annoucement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function Home() {
    return (
        <div className="container">
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories />
        </div>
    )
}

export default Home
