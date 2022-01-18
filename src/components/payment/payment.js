import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../stateprovider';
import CheckoutProduct from '../checkoutproduct/checkoutproduct';
import { Link } from 'react-router-dom';
import './payment.css';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../../reducer';
import * as CurrencyFormat from 'react-currency-format';

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    useEffect(() => {
        // Generate stripe secret key that allows us to charge the customer.
    }, []);

    const handleSubmit = async event => {
        // Stripe
        event.preventDefault();
        setProcessing(true);


        // const payload = await stripe
    }

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        {<Link to="/checkout">{basket?.length} items</Link>}
                    )
                </h1>
                {/* Deliver address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* Payment section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment method */}
                <div className="payment__section">
                    <h3>Payment Method</h3>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                            {basket?.length !== 0 ? 
                                <>
                                    <CurrencyFormat 
                                        renderText={(value) => (
                                            <>
                                                <p>
                                                    Order Total ({basket.length} items): <strong>{value}</strong>
                                                </p>
                                                <small className="subtotal__gift">
                                                    <input type="checkbox" />This order contains a gift
                                                </small>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                </> :
                                <>
                                    <CurrencyFormat 
                                        renderText={() => (
                                            <>
                                                <p>
                                                    Order Total ({basket.length} items): <strong>0</strong>
                                                </p>
                                                <small className="subtotal__gift">
                                                    <input type="checkbox" />This order contains a gift
                                                </small>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                </>
                            }    
                            <button disabled={processing || disabled || succeeded }>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
