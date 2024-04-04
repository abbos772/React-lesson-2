import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import apple from "../../img/1200px-Apple_gray_logo 1.png";
import phonesvg from "../../img/Vector (8).png";
import pcsvg from "../../img/Category-Computer.png";
import watchsvg from "../../img/Category-SmartWatch.png";
import camerasvg from "../../img/camera-svgrepo-com (3).svg";
import headphonesvg from "../../img/Category-Headphone.png";
import gamepadesvg from "../../img/Category-Gamepad.png";
import stars from "../../img/Three Star.png";
import imgcard1 from "../../img/71RdoeXxtrL 1 (1).png";
import imgcatd2 from "../../img/Frame 604.png";
import imgcatd3 from "../../img/Frame 604 (1).png";
import imgcatd4 from "../../img/curology-j7pKVQrTUsM-unsplash 1.png";
import imgcatd5 from "../../img/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import imgcatd6 from "../../img/Frame 608.png";
import imgcatd7 from "../../img/GP11_PRD3 1.png";
import imgcatd8 from "../../img/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png";
import "./Main.css";
function Main() {
  const data = [
    {
      id: 1,
      url: phonesvg,
      title: "Phones",
    },
    {
      id: 2,
      url: pcsvg,
      title: "Computers",
    },
    {
      id: 3,
      url: watchsvg,
      title: "SmartWatch",
    },
    {
      id: 4,
      url: camerasvg,
      title: "Camera",
    },
    {
      id: 5,
      url: headphonesvg,
      title: "HeadPhones",
    },
    {
      id: 6,
      url: gamepadesvg,
      title: "Gaming",
    },
  ];
  let svgs = data?.map((el) => (
    <div key={el.id} className="box">
      <img src={el.url} alt="" />
      <h3>{el.title}</h3>
    </div>
  ));
  const data2 = [
    {
      id: 1,
      url: imgcard1,
      title: "Breed Dry Dog Food",
      price: "100",
      rating: "35",
    },
    {
      id: 2,
      url: imgcatd2,
      title: "CANON EOS DSLR Camera",
      price: "360",
      rating: "95",
    },
    {
      id: 3,
      url: imgcatd3,
      title: "ASUS FHD Gaming Laptop",
      price: "700",
      rating: "325",
    },
    {
      id: 4,
      url: imgcatd4,
      title: "Curology Product Set",
      price: "500",
      rating: "145",
    },
    {
      id: 5,
      url: imgcatd5,
      title: "Kids Electric Car",
      price: "960",
      rating: "65",
    },
    {
      id: 6,
      url: imgcatd6,
      title: "Jr.Zoom Soccer Cleats",
      price: "1160",
      rating: "35",
    },
    {
      id: 7,
      url: imgcatd7,
      title: "GP11 Shooter USB Gamepad",
      price: "660",
      rating: "55",
    },
    {
      id: 8,
      url: imgcatd8,
      title: "Quilted Satin Jacket",
      price: "660",
      rating: "55",
    },
  ];
  let products = data2?.map((el) => (
    <div key={el.id} class="card">
      <div class="card__image">
        <img src={el.url} alt="" />
        <div class="hearts">
          <div class="heart">
            <CiHeart className="koz" />
          </div>
          <div class="heart">
            <FaRegEye className="koz" />
          </div>
        </div>
        <div class="new">NEW</div>
        <ul class="sci">
          <li>
            <button class="btn__card">Add To Card</button>
          </li>
        </ul>
      </div>
      <div class="card__text">
        <div class="brand">
          <h4>{el.title}</h4>
        </div>
        <div class="stars">
          <h4>${el.price}</h4>
          <img src={stars} alt="" />
          <p>({el.rating})</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="continer">
      <div className="iphone_card">
        <div className="iphone_text">
          <div className="apple">
            <img src={apple} alt="" />
            <h4>iPhone 14 Series</h4>
          </div>
          <h1>
            Up to 10% <br /> off Voucher
          </h1>
          <a className="aa_shop" href="">
            Shop Now <FaArrowRight />{" "}
          </a>
        </div>
        <div className="iphone14"></div>
      </div>
      <div className="by_category">
        <div className="cate">
          <div className="our">
            <div className="cate1"></div>
            <h3>Categories</h3>
          </div>
        </div>
        <h1>Browse By Category</h1>
      </div>
      <div className="boxes">{svgs}</div>
      <hr />
      <div class="by_category2">
        <div class="cate">
          <div class="our">
            <div class="cate1"></div>
            <h3>Our Products</h3>
          </div>
        </div>

        <div class="strelka">
          <div class="str">
            <FaArrowLeft />
          </div>
          <div class="str">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="cards">{products}</div>
    </div>
  );
}
export default Main;
