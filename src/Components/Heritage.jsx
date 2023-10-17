
import React from "react";
import product4Image from "../Asserts/Images/images/product-4.jpg";

function Heritage() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-between">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card" style={{boxShadow: "5px 5px 3px lightgrey"}}>
              <div className="card-body">
                <h4 className="card-title">Heritage 1921</h4>
                <p className="card-text">Minimalistic and Modern</p>
                <a href="#" className="btn btn" style={{color: "#542DED"}}>
                 <b> EXPLORE </b> <i className="mdi mdi-chevron-right"></i>
                </a>
                <img src={product4Image} className="card-img-top mt-3"  alt="Image4" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card" style={{boxShadow: "5px 5px 3px lightgrey"}}>
              <div className="card-body">
                <h4 className="card-title">Heritage 1921</h4>
                <p className="card-text">Minimalistic and Modern</p>
                <a href="#" className="btn btn" style={{color: "#542DED"}}>
                 <b> EXPLORE </b> <i className="mdi mdi-chevron-right"></i>
                </a>
                <img src={product4Image} className="card-img-top mt-3"  alt="Image4" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card" style={{boxShadow: "5px 5px 3px lightgrey"}}>
              <div className="card-body">
                <h4 className="card-title">Heritage 1921</h4>
                <p className="card-text">Minimalistic and Modern</p>
                <a href="#" className="btn btn" style={{color: "#542DED"}}>
                 <b> EXPLORE </b> <i className="mdi mdi-chevron-right"></i>
                </a>
                <img src={product4Image} className="card-img-top mt-3"  alt="Image4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container mt-5">
          <div className="row">
            {/* About Us 1 */}
            <div className="col-md-3">
              <div className="about-us text-center border border-light p-3" style={{boxShadow: "0 0 10px lightgrey" }}>
                <i className="lni lni-users" style={{ fontSize: "30px", background: "#542DED", color: "#fff", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", marginBottom: "20px" }}></i>
                <span className="about-us-span" style={{ fontSize: "40px", fontWeight: "bolder", fontFamily: "Rubik, sans-serif", marginTop: "10px" }}>300</span>
                <h3 className="about-us-h3" style={{ fontSize: "18px", fontWeight: "700", fontFamily: "Rubik, sans-serif", marginTop: "15px" }}>Happy Clients</h3>
              </div>
            </div>

            {/* About Us 2 */}
            <div className="col-md-3">
              <div className="about-us text-center border border-light p-3" style={{boxShadow: "0 0 10px lightgrey" }}>
                <i className="lni lni-checkmark" style={{ fontSize: "30px", background: "#542DED", color: "#fff", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", marginBottom: "20px" }}></i>
                <span className="about-us-span" style={{ fontSize: "40px", fontWeight: "bolder", fontFamily: "Rubik, sans-serif", marginTop: "10px" }}>30</span>
                <h3 className="about-us-h3" style={{ fontSize: "18px", fontWeight: "700", fontFamily: "Rubik, sans-serif", marginTop: "15px" }}>Complete Projects</h3>
              </div>
            </div>

            {/* About Us 3 */}
            <div className="col-md-3">
              <div className="about-us text-center border border-light p-3" style={{boxShadow: "0 0 10px lightgrey" }}>
                <i className="lni lni-hourglass" style={{ fontSize: "30px", background: "#542DED", color: "#fff", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", marginBottom: "20px" }}></i>
                <span className="about-us-span" style={{ fontSize: "40px", fontWeight: "bolder", fontFamily: "Rubik, sans-serif", marginTop: "10px" }}>12</span>
                <h3 className="about-us-h3" style={{ fontSize: "18px", fontWeight: "700", fontFamily: "Rubik, sans-serif", marginTop: "15px" }}>Pending Projects</h3>
              </div>
            </div>

            {/* About Us 4 */}
            <div className="col-md-3">
              <div className="about-us text-center border border-light p-3" style={{boxShadow: "0 0 10px lightgrey" }}>
                <i className="lni lni-coffee-cup" style={{ fontSize: "30px", background: "#542DED", color: "#fff", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", marginBottom: "20px" }}></i>
                <span className="about-us-span" style={{ fontSize: "40px", fontWeight: "bolder", fontFamily: "Rubik, sans-serif", marginTop: "10px" }}>960</span>
                <h3 className="about-us-h3" style={{ fontSize: "18px", fontWeight: "700", fontFamily: "Rubik, sans-serif", marginTop: "15px" }}>Cup Of Tea</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Heritage;
