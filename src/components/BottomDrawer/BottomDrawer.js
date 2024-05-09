import React from "react";
import "./BottomDrawer.css";

const bottomDrawer = (props) => {
  console.log(props.isOpen);
  return (
    <nav className={`bottom-drawer${props.isOpen ? " open" : ""}`}>
      <button onClick={props.onClick} className="closebutton">
        X
      </button>
      <ul>
        <li>
          <img src="https://placehold.co/60x60" alt="mplouza" />
          <div className="product1">
            <a id="title1" href="/">
              Puff Sleeve Tie Front Crop Top
            </a>
            <a id="link" href="url">
              SHOP NOW
            </a>
          </div>
        </li>
        <li>
          <img src="https://placehold.co/60x60" alt="panteloni" />
          <div className="product2">
            <a id="title2" href="/">
              Wide Leg Printed Pant
            </a>
            <a id="link2" href="url">
              SHOP NOW
            </a>
          </div>
        </li>
        <li>
          <img src="https://placehold.co/60x60" alt="braxioli" />
          <div className="product3">
            <a id="title3" href="/">
              Chunky Bangle Bracelet
            </a>
            <a id="link3" href="url">
              SHOP NOW
            </a>
          </div>
        </li>
        <li>
          <img src="https://placehold.co/60x60" alt="perilaimio" />
          <div className="product4">
            <a href="/">Oval Chain Detail Necklace</a>
            <a id="link4" href="url">
              SHOP NOW
            </a>
          </div>
        </li>
        <li>
          <img src="https://placehold.co/60x60" alt="tsanta" />
          <div className="product5">
            <a href="/">Pleated Detail Bag with Bow</a>
            <a id="link5" href="url">
              SHOP NOW
            </a>
          </div>
        </li>
        <li>
          <img src="https://placehold.co/60x60" alt="mplouza" />
          <div className="product1">
            <a id="title1" href="/">
              Dummy product to see if scrolling works properly
            </a>
            <a id="link" href="url">
              SHOP NOW
            </a>
          </div>
        </li>
        <li>
          <img src="https://placehold.co/60x60" alt="mplouza" />
          <div className="product1">
            <a id="title1" href="/">
              Dummy product to see if scrolling works properly
            </a>
            <a id="link" href="url">
              SHOP NOW
            </a>
          </div>
        </li>
        <li>
          <img src="https://placehold.co/60x60" alt="mplouza" />
          <div className="product1">
            <a id="title1" href="/">
              Dummy product to see if scrolling works properly
            </a>
            <a id="link" href="url">
              SHOP NOW
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default bottomDrawer;
