import React from 'react'
import './home.css'
import Product from '../product/product';

export const productOne = {
    id: '12345678',
    title: 'Levis',
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/71StHyQfQbL._AC_UL320_.jpg",
    rating: 4
}

export const productTwo = {
    id: '81234821',
    title: 'adidas',
    price: 40.59,
    image: "https://m.media-amazon.com/images/I/61FbqzPD8TL._AC_UL320_.jpg",
    rating: 5
}

export const productThree = {
    id: '81234221',
    title: 'Fossil',
    price: 202.38,
    image: "https://m.media-amazon.com/images/I/712xd6dVHVL._AC_UL320_.jpg",
    rating: 4
}

export const productFour = {
    id: '81454821',
    title: 'Optifine',
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/61c4gxqBU2L._AC_UL320_.jpg",
    rating: 2
}

export const productFive = {
    id: '81239871',
    title: 'Synthic Apparel',
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/710jqyUKs-L._AC_UL320_.jpg",
    rating: 4
}

export const productSix = {
    id: '76534821',
    title: 'Champion',
    price: 12.36,
    image: "https://m.media-amazon.com/images/I/71w39SOxb8L._AC_UL320_.jpg",
    rating: 5
}

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://m.media-amazon.com/images/I/71seRMjOzBL._SX3000_.jpg" 
                alt="Amazon Banner" />
                <div className="home__row">
                    <Product data={productOne} />
                    <Product data={productTwo} />
                </div>
                <div className="home__row">
                    <Product data={productThree} /> 
                    <Product data={productFour} />
                    <Product data={productFive} />
                </div>
                <div className="home__row">
                    <Product data={productSix} /> 
                </div>
            </div>
        </div>
    )
}

export default Home
