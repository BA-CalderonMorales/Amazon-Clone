import React from 'react'
import './header.css';
import { Search, ShoppingBasket } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../stateprovider';
import { auth, signOut } from '../../firebase';

const Header = ({motion}) => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            signOut(auth);
        }
    }

    return (
        <motion.div className="header"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            {/* Amazon Logo */}
            <Link to="/">
                <img
                    className="header__logo" 
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                    alt="Navigation Logo"
                />
            </Link>
            {/* Search Bar */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <Search className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    {/* Options after search bar */}
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </motion.div>
    )
}

 export default Header
