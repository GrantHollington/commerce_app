import React from 'react'
import Annoucement from '../components/Annoucement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'


function Home() {
    return (
        <div className="container">
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
        </div>
    )
}

export default Home
