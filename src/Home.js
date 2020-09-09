import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src=" https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="11223341"
            title="boAt Rockerz 255 Pro Wireless Headset with ASAP Charge Technology, 
          Bluetooth V5.0, Qualcomm Chipset, Super Extra Bass, IPX5 Sweat and Water Resistance and Up to 
          6H Playtime (Teal Green)"
            price={1599}
            image="https://images-na.ssl-images-amazon.com/images/I/61wN%2BZljZjL.
          _SL1500_.jpg"
            alt=""
            rating={4}
          />
          <Product
            id="11223342"
            title="Samsung Galaxy S10 (Black, 8GB RAM, 128GB Storage)"
            price={49990}
            image="https://m.media-amazon.com/images/I/81snLg55xeL._AC_UY218_.jpg"
            alt=""
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="11223343"
            title="OnePlus 8 (Glacial Green 12GB RAM+256GB Storage)"
            price={49999}
            image="https://m.media-amazon.com/images/I/619iTNHSCGL._AC_UL320_.jpg"
            alt=""
            rating={4}
          />
          <Product
            id="11223344"
            title="Marshall Amplification MS-2R Red Micro Guitar Amp"
            price={3500}
            image="https://m.media-amazon.com/images/I/51holWs6RML._AC_SR300,300_.jpg"
            alt=""
            rating={3}
          />
          <Product
            id="11223345"
            title="Shure SM7B Cardioid Vocal Dynamic Microphone"
            price={4800}
            image="https://m.media-amazon.com/images/I/41eDwcA6NBL._AC_SR300,300_.jpg"
            alt=""
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="11223346"
            title="Mi 4A PRO 80 cm (32) HD Ready LED Smart Android TV With Google Data Saver"
            price={14000}
            image="https://rukminim1.flixcart.com/image/416/416/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg?q=70"
            alt=""
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
