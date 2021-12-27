import React from "react";
import "./App.css";
import chair from "./images/long.jpg";

function productCard() {
 
  return (
    <div className="container">
    <div className="product-card">
    <span className="card-tag">#1 Best Seller</span>
    <div className="card-header">
      <img src={chair} alt="chair"/>
    </div>
    <div className="card-body">
      <h4 className="product-title" >Easy Relax Chair</h4>
      <p className="product-status">Ships in 3-4 days</p>
      <h5 className="product-price">$100.00</h5>
    </div>
    <div className="card-footer">
      <button className="btn btn-secondary">Save</button>
      <button className="btn btn-primary">Buy</button>
    </div>
  </div>
  </div>
  );
}

export default productCard;
