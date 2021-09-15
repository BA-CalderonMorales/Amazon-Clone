import React from 'react'
import './checkout.css';
import Subtotal from '../subtotal/subtotal';
import { useStateValue } from '../../stateprovider';
import CheckoutProduct from '../checkoutproduct/checkoutproduct';

const Checkout = ({motion}) => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <motion.div
            className="checkout"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                <div className="checkout__left">
                    <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/slsm_bottom-banner_1500x120_v2.jpg" 
                    alt="" />
                    <div>
                        <h2 className="checkout__title">
                            Your shopping basket
                        </h2>
                        {basket.map(item => 
                            <CheckoutProduct
                                key={item.id} 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )}
                    </div>
                </div>
                
                <div className="checkout__right">
                    <Subtotal />
                    <h2>Subtotal</h2>
                </div>
        </motion.div>
    )
}

export default Checkout
