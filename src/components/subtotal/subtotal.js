import React from 'react'
import "./subtotal.css"
import * as CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../stateprovider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    
    const sendToPayment = (e) => {
        history.push('/payment')
    }

    return (
        <div className="subtotal">
            {basket?.length !== 0 ? 
                <>
                    <CurrencyFormat 
                        renderText={(value) => (
                            <>
                                <p>
                                    Subtotal ({basket.length} items): <strong>{value}</strong>
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
                                    Subtotal ({basket.length} items): <strong>0</strong>
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
            <button onClick={sendToPayment}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
