import React from 'react'
import './product.css'
import { StarRate } from '@material-ui/icons';
import { motion } from 'framer-motion';
import { useStateValue } from '../../stateprovider';
import { ADD_TO_BASKET } from '../../constants/constants';


const Product = ({data: {id, title, price, image, rating}}) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: ADD_TO_BASKET,
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    
    return (
        <motion.div className="product" 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>
                            <StarRate className="star"/>
                        </p>
                    ))}
                </div>
            </div>
            <img src={image} alt="Product Image" />
            <button onClick={addToBasket}>Add to Basket</button>
        </motion.div>
    )
}

export default Product
