
import React from "react";
import contentImage from "../Asserts/Images/images/content-2.jpg";
import productImage2 from "../Asserts/Images/images/product-2.jpg";

function Content() {
  return (
    <div>
      {/* Overplay Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img src={contentImage} alt="content" className="img-fluid" style={{  maxWidth: "100%", height: "100%" }} />
          </div>
          <div className="col-md-6 mt-5 " style={{ marginLeft: "-25px" }} >
            <div className="p-5 rounded" style={{ height: "100%", backgroundColor: "#eee" }}>
              <h5>
                <strong>ALL-IN-ONE VR</strong>
              </h5>
              <br />
              <h3>
                <strong>Always ready when you are</strong>
              </h3>
              <p className="fs-5">
                Oculus Go is our all-in-one VR headset that's portable and easy to use. Experience entertainment on the go with no PC, wires, or hassles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mt-5 me-5 mb-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3 mt-4">
  <div className="card border border-light">
    <img src={productImage2} className="card-img-top" alt="Image 1" />
    <div className="card-footer bg-light d-flex flex-column">
      <h1 className="fs-5 " style={{ textAlign: "left" }}>Oculus Quest</h1>
      <p className="fs-6 text-left">All in one gaming headset with lightweight, flexible design</p>
      <div className="d-flex justify-content-between align-items-center mt-auto">
        <span className="fs-5 text-danger"> <b>$ 399</b></span>
        <button className="btn btn-primary" style={{backgroundColor: "#542DED"}}>
          <i className="fa-solid fa-cart-plus fs-5 me-2"></i>
          <strong>Add To Cart</strong>
        </button>
      </div>
    </div>
  </div>
</div>


          {/* Card 2 */}
          <div className="col-md-3 mt-4">
  <div className="card border border-light">
    <img src={productImage2} className="card-img-top" alt="Image 1" />
    <div className="card-footer bg-light d-flex flex-column">
      <h1 className="fs-5 " style={{ textAlign: "left" }}>Oculus Quest</h1>
      <p className="fs-6 text-left">All in one gaming headset with lightweight, flexible design</p>
      <div className="d-flex justify-content-between align-items-center mt-auto">
      <span className="fs-5 text-danger"> <b>$ 399</b></span>
        <button className="btn btn-primary" style={{backgroundColor: "#542DED"}}>
          <i className="fa-solid fa-cart-plus fs-5 me-2"></i>
          <strong>Add To Cart</strong>
        </button>
      </div>
    </div>
  </div>
</div>

          {/* Card 3 */}
          <div className="col-md-3 mt-4">
  <div className="card border border-light">
    <img src={productImage2} className="card-img-top" alt="Image 1" />
    <div className="card-footer bg-light d-flex flex-column">
      <h1 className="fs-5 " style={{ textAlign: "left" }}>Oculus Quest</h1>
      <p className="fs-6 text-left">All in one gaming headset with lightweight, flexible design</p>
      <div className="d-flex justify-content-between align-items-center mt-auto">
      <span className="fs-5 text-danger"> <b>$ 399</b></span>
        <button className="btn btn-primary" style={{backgroundColor: "#542DED"}}>
          <i className="fa-solid fa-cart-plus fs-5 me-2"></i>
          <strong>Add To Cart</strong>
        </button>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    </div>
  );
}

export default Content;

