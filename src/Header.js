import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>
      <SearchIcon className="header_searchIcon" />

      <div className="header_nav"></div>
      <Link to={!user && "/login"}>
        <div onClick={handleAuthenticaton} className="header_option">
          <span className="header_optionlineone">
            Hello {!user ? "Guest" : user.email}
          </span>
          <span className="header_optionlinetwo">
            {user ? "Sign Out " : "Sign In"}
          </span>
        </div>
      </Link>

      <Link to="/orders">
        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">Orders</span>
        </div>
      </Link>
      <Link to="/Prime">
        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
      </Link>

      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
