
import React from 'react';

function Products() {
  
  return (
    <div>

           <div className="container">  
         <div className="row">
           <div className="col-md-4">
             <div className="card border border-light mt-4" style={{ width: "80%", maxWidth: "100%" }}>
               <div className="card-body text-center">
                 <i className="mdi mdi-truck-fast fs-1" style={{color: "#393D8E"}}></i>
                 <h1 className="fs-5 my-3">
                   <strong>Two-hour delivery</strong>
                 </h1>
                 <p className="fs-6">Available in most metros on selected in-stock products</p>
                 <a href="#" className="btn btn-link fs-6 text-decoration-none" style={{color: "#542DED"}}>
                   <strong>LEARN MORE</strong>
                 </a>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="card border border-light mt-4" style={{ width: "80%", maxWidth: "100%" }}>
               <div className="card-body text-center">
                 <i className="mdi mdi-message-text fs-1" style={{color: "#393D8E"}}></i>
                 <h1 className="fs-5 my-3">
                   <strong>Get help buying</strong>
                 </h1>
                 <p className="fs-6">Have a question? Call a Specialist or chat online for help</p>
                 <a href="#" className="btn btn-link fs-6 text-decoration-none" style={{color: "#542DED"}}>
                   <strong>CONTACT US</strong>
                 </a>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="card border border-light mt-4" style={{ width: "80%", maxWidth: "100%" }}>
               <div className="card-body text-center">
                 <i className="mdi mdi-ticket-percent fs-1" style={{color: "#393D8E"}}></i>
                 <h1 className="fs-5 my-3">
                   <strong>Find the card for you</strong>
                 </h1>
                 <p className="fs-6">Get 3% Daily Cash with special financing offers from us</p>
                 <a href="#" className="btn btn-link fs-6 text-decoration-none" style={{color: "#542DED"}}>
                   <strong>LEARN MORE</strong>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
       <br /> <br />



    </div>
  )
}

export default Products;

