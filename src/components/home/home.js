import React from 'react'
import './home.css'
import Product from '../product/product';

export const productOne = {
    id: '12345678',
    title: 'Levis',
    price: 79.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71StHyQfQbL._AC_UL320_.jpg",
}

export const productTwo = {
    id: '81234821',
    title: 'adidas',
    price: 40.59,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61FbqzPD8TL._AC_UL320_.jpg",
}

export const productThree = {
    id: '81234221',
    title: 'Fossil',
    price: 202.38,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/712xd6dVHVL._AC_UL320_.jpg",
}

export const productFour = {
    id: '81454821',
    title: 'Optifine',
    price: 29.99,
    rating: 2,
    image: "https://m.media-amazon.com/images/I/61c4gxqBU2L._AC_UL320_.jpg",
}

export const productFive = {
    id: '81239871',
    title: 'Synthic Apparel',
    price: 19.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/710jqyUKs-L._AC_UL320_.jpg",
}

export const productSix = {
    id: '76534821',
    title: 'Champion',
    price: 12.36,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71w39SOxb8L._AC_UL320_.jpg",
}

const Home = ({motion}) => {
    return (
        <motion.div className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
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
        </motion.div>
    )
}

export default Home
