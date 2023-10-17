
import React from "react";
import pricingImage from "../Asserts/Images/images/pricing-5.png";

function Subscription() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* cardo 1 */}
        <div className="col-md-4 mb-4">
          <div className="card bg-light">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <p className="fs-5">Starter Plan</p>
                <p className="fs-3 fw-bold me-1 pt-0">$10</p>
              </div>
              <p className="fs-6 " style={{textAlign: "end", marginTop: "-20px"}}>/weekly</p>
              <div className="text-center">
                <img src={pricingImage} className="img-fluid mx-auto d-block" alt="cardo Image" style={{ width: "22%" }} />
              </div>
              <div className="mt-3">
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 2 Accounts </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox2" />
                  <label className="form-check-label mb-0" htmlFor="checkbox2"> Up to 5GB Space </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 1 Domain </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 24/7 Support </label>
                </div>
                <button className="btn btn-primary w-100 mt-3">GET STARTED</button>
              </div>
            </div>
          </div>
        </div>

        {/* cardo 2 */}
        <div className="col-md-4 mb-4">
          <div className="card bg-light">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <p className="fs-5">Starter Plan</p>
                <p className="fs-3 fw-bold me-1 pt-0">$50</p>
              </div>
              <p className="fs-6 " style={{textAlign: "end", marginTop: "-20px"}}>/monthly</p>
              <div className="text-center">
                <img src={pricingImage} className="img-fluid mx-auto d-block" alt="cardo Image" style={{ width: "22%" }} />
              </div>
              <div className="mt-3">
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 2 Accounts </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox2" />
                  <label className="form-check-label mb-0" htmlFor="checkbox2"> Up to 5GB Space </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 1 Domain </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 24/7 Support </label>
                </div>
                <button className="btn btn-primary w-100 mt-3">GET STARTED</button>
              </div>
            </div>
          </div>
        </div>

        {/* cardo 3 */}
        <div className="col-md-4 mb-4">
          <div className="card bg-light">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <p className="fs-5">Starter Plan</p>
                <p className="fs-3 fw-bold me-1 pt-0">$90</p>
              </div>
              <p className="fs-6 " style={{textAlign: "end", marginTop: "-20px"}}>/yearly</p>
              <div className="text-center">
                <img src={pricingImage} className="img-fluid mx-auto d-block" alt="cardo Image" style={{ width: "22%" }} />
              </div>
              <div className="mt-3">
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 2 Accounts </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox2" />
                  <label className="form-check-label mb-0" htmlFor="checkbox2"> Up to 5GB Space </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 1 Domain </label>
                </div>
                <div className="form-check d-flex align-items-center mb-2">
                  <input type="checkbox" className="form-check-input me-2" id="checkbox1" />
                  <label className="form-check-label mb-0" htmlFor="checkbox1"> 24/7 Support </label>
                </div>
                <button className="btn btn-primary w-100 mt-3">GET STARTED</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;

