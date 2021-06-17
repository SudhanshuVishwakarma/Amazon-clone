import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_1500x600._CB659658858_.jpg"
        />
        <div className="home_row">
          <Product
            id="123312"
            title="The Intelligent Investor By Benjamin Graham (Paperback – 2013)"
            price={500}
            image="https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._SX323_BO1,204,203,200_.jpg"
            rating={5}
          />

          <Product
            id="657668"
            title="Samsung Galaxy Tab S7 27.81 cm (11 inch) 120 Hz Display, S-Pen in Box, Quad Speakers, 6 GB RAM, 128 GB Internal,Wi-Fi + LTE, Mystic Black"
            price={63000}
            image="https://images-na.ssl-images-amazon.com/images/I/81JIEzzsnHL._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="123321"
            title="Amazon Brand - Solimo Plastic Water Bottle Set with Flip cap (Set of 3, 975ml, Multicolor)"
            price={254}
            image="https://images-eu.ssl-images-amazon.com/images/I/41f3nlrAOJL._AC_SX184_.jpg"
            rating={3}
          />

          <Product
            id="466333"
            title="Noise Air Buds Truly Wireless Bluetooth Earbuds with Mic for Crystal Clear Calls & Music, 20 Hour Playtime & Smart Touch Control - ICY White"
            price={2740}
            image="https://m.media-amazon.com/images/I/31PcFDpAVJL.jpg"
            rating={4}
          />

          <Product
            id="987347"
            title="Gear Cross Training Travel Duffel Grey Orange (DUFCRSTNG0406)"
            price={599}
            image="https://m.media-amazon.com/images/I/51LMnN32XWL.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="986123"
            title="OCEAN RACE Cotton Anti Pollution 3 Layer Reusable Face Mask-Wine,Navy,Grey,Indigo Blue,Black,Petrol Blue-Pack of 6"
            price={499}
            image="https://m.media-amazon.com/images/I/41QTvReEsIL.jpg"
            rating={2}
          />

          <Product
            id="230012"
            title="Acer Nitro VG280K 28 inch UHD 3840 X 2160 Resolution Gaming Monitor (IPS Panel, FreeSync, 60Hz, 4MS, HDR 10, DP, HDMI, Black)"
            price={24000}
            image="https://m.media-amazon.com/images/I/71Ny6IrYQdL._AC_UY327_FMwebp_QL65_.jpg"
            rating={2}
          />
        </div>
        ------
        <div className="home_row">
          <Product
            id="123356"
            title="Vivo X60 (Shimmer Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={37990}
            image="https://images-na.ssl-images-amazon.com/images/I/71EshsD%2BG7L._SL1200_.jpg"
            rating={4}
          />

          <Product
            id="466388"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            price={185990}
            image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
            rating={5}
          />

          <Product
            id="987349"
            title="Scott International Men's Regular Fit T-Shirt (Pack of 3)"
            price={599}
            image="https://images-na.ssl-images-amazon.com/images/I/71vp8Lec9JL._UL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="986190"
            title="Lavie Ushawu Women's Satchel (Maroon) (Piece 1)"
            price={2021}
            image="https://images-na.ssl-images-amazon.com/images/I/81CWKS3m9yL._UL1500_.jpg"
            rating={2}
          />

          <Product
            id="230015"
            title="Fastrack reflex 3.0 (Black & Blue) Uni-sex activity tracker - Full touch, color display, Heart rate monitor, Dual- tone silicone strap and up to 10 days battery life"
            price={2495}
            image="https://images-na.ssl-images-amazon.com/images/I/61oHM3Le1hL._UL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
