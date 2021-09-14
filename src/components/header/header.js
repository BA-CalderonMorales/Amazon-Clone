import React from 'react'
import './header.css';
import { Search, ShoppingBasket } from '@material-ui/icons'

const Header = () => {
    return (
        <div className="header">
            {/* Amazon Logo */}
            <img
                className="header__logo" 
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
            />
            {/* Search Bar */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <Search className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* Options after search bar */}
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>
            <div className="header__optionBasket">
                <ShoppingBasket />
                <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
        </div>
    )
}

 export default Header
