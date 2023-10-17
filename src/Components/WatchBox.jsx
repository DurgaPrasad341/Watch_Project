import React from "react";
import productImage from "../Asserts/Images/images/product-1.jpg";
import "../Asserts/Styles/WatchBox.css";

function WatchBox() {
    const watchPrice = 399;
    return (
        <div>
            <div className='container text-center'>
          <div className='row gap-3'>
            <div className='col-lg bg-light'>
              <figure className='position-relative'><img src={productImage} alt='wth_pricing' style={{width:'80%'}} height={'auto'} />
                <figcaption className='position-absolute price-box p-3'><h5 className='fw-bold text-white'>Metro 38 date</h5><p className='text-white fw-lighter'>Reference 1102</p>
                <button className='bg-danger fw-bold text-white' style={{border: "none"}}><i class="fa-solid fa-cart-shopping"></i> $ {watchPrice}</button>
                </figcaption>
              </figure>
            </div>

            <div className='col-lg bg-light'>
              <figure className='position-relative'><img src={productImage} alt='wth_pricing' style={{width:'80%'}} height={'auto'} />
                <figcaption className='position-absolute price-box p-3'><h5 className='fw-bold text-white'>Metro 38 date</h5><p className='fs-6 text-white fw-lighter'>Reference 1102</p>
                <button className='bg-danger fw-bold text-white' style={{border: "none"}}><i class="fa-solid fa-cart-shopping"></i> $ {watchPrice}</button>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        </div>
    )
}

export default WatchBox;