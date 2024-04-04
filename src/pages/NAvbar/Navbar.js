import React from "react";
import "./Navbar.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
function Navbar() {
  const Href = ["Home", "Contact", "About", "Sing in"];
  let a = Href?.map((value, index) => {
    return (
      <h4 key={index} className="aa">
        {value}
      </h4>
    );
  });

  return (
    <div className="abbos">
      <header>
        <div className="">
          <div className="nav_top">
            <div className="continer nav">
              <h5>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </h5>
              <a className="a_shop" href="">
                ShopNow
              </a>
            </div>
          </div>
          <div className="navbar">
            <div className="continer">
              <div className="navbar_flex">
                <div class="nav_text">
                  <h1>Exclusive</h1>
                </div>
                <div className="menu">
                  <div className="a_text">{a}</div>
                </div>
                <div class="shop">
                  <div class="input__search">
                    <input
                      type="text"
                      id="search"
                      placeholder="What are you looking for?"
                    />
                    <IoIosSearch className="lupa" />
                  </div>
                  <div class="shop_2">
                    <IoMdHeartEmpty className="lupa" />
                    <PiShoppingCartSimple className="lupa" />
                  </div>
                </div>
                <div class="hamburger">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
