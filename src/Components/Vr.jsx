
 import React,{useState} from 'react';
 import vrsetimg from '../Asserts/Images/images/product-3.jpg';
 import t1 from '../Asserts/Images/images/thunb-1.jpg';
 import t2 from '../Asserts/Images/images/thunb-2.jpg';
 import t3 from '../Asserts/Images/images/thunb-3.jpg';
 import t4 from '../Asserts/Images/images/thunb-4.jpg';
 import t5 from '../Asserts/Images/images/thunb-5.jpg';
 import t7 from '../Asserts/Images/images/product-items-1.jpg';
 import t8 from '../Asserts/Images/images/product-items-2.jpg';
 import t9 from '../Asserts/Images/images/product-items-3.jpg';
 import "../Asserts/Styles/Vr.css"


  function Vr() {
  
   const highlightedStyle = {
     border: '2px solid green',
   };
  
 const [selectImg, setSelectImg] = useState(vrsetimg);
 const [count, setCount] = useState(0);
 const [selectedColor, setSelectedColor] = useState("1");
 const [highlightedImage, setHighlightedImage] = useState(null);
 const handleCount = (e) => {
   if (count > 0) {
     setCount(count - 1);
   }};
   const handleColorChange = (colorValue) => {
     setSelectedColor(colorValue);
     switch (colorValue) {
       case "1":
         setHighlightedImage("t7");
         break;
       case "2":
         setHighlightedImage("t8");
         break;
       case "3":
         setHighlightedImage("t9");
         break;
       default:
         setHighlightedImage(null);
     }
   };

 const handleImg = (src) => {
   setSelectImg(src);
   setHighlightedImage(src);
 };
 
 const img_hovr = document.getElementById('hov-img');
 const addEventList =()=>{
   img_hovr.style.outlineColor = 'red';
 }
  
  return (
    <div>
             {/*  VR product All-in-one start  */}
        <div className='vrset-box pb-4'>
            <section className='text-center p-3'>
                  <h5 className='pt-5 lh-1'>All-in-one</h5>
                  <h2>Oculus VR</h2>
            </section>
            <div className='vr-set text-center'>
                  <img src={selectImg} alt='vrimg1' id='expandedImg' style={{maxWidth:'75%', maxHeight:'70%'}}/>
            </div>
              <div className='vr-select'>
  
                <div class="d-flex flex-row justify-content-center">
  <div class="p-1 col-2">
    <button className={`btn btn ${highlightedImage === t1 ? 'selected' : ''}`} onClick={() => handleImg(t1)}>
      <img className="vrset-hover" src={t1} alt="thumb1" width={50} height={50} />
    </button>
  </div>
  <div class="p-1 col-2">
    <button className={`btn btn ${highlightedImage === t2 ? 'selected' : ''}`} onClick={() => handleImg(t2)}>
      <img className="vrset-hover" src={t2} alt="thumb2" width={50} height={50} />
    </button>
  </div>
  <div class="p-1 col-2">
    <button className={`btn btn ${highlightedImage === t3 ? 'selected' : ''}`} onClick={() => handleImg(t3)}>
      <img className="vrset-hover" src={t3} alt="thumb3" width={50} height={50} />
    </button>
  </div>
  <div class="p-1 col-2">
    <button className={`btn btn ${highlightedImage === t4 ? 'selected' : ''}`} onClick={() => handleImg(t4)}>
      <img className="vrset-hover" src={t4} alt="thumb4" width={50} height={50} />
    </button>
  </div>
  <div class="p-1 col-2">
    <button className={`btn btn ${highlightedImage === t5 ? 'selected' : ''}`} onClick={() => handleImg(t5)}>
      <img className="vrset-hover" src={t5} alt="thumb5" width={50} height={50} />
    </button>
  </div>

                </div>
              </div>
  
                {/*  Add to cart and Buy now code start --- multiselect ---- color select*/}
  
              <div className='container text-start'>
                <h5 className='pt-5 lh-1 text-align-left'>All-in-one</h5>
                <h2 className='fw-bold'>Oculus VR</h2>
              </div>
  
          {/*  1 row ----  1st colomn started */}
                
          <div className='container text-center vr-select-product'>
            <div className='row'>
                <div className='col-lg bg-light '>
                    <p className='fst-normal text-start'>Select Your Oculus:</p>
                                   <div className="d-flex flex-row justify-content-left gap-3">
         <div
           className={`p-2 ${
             highlightedImage === "t7" ? "highlighted" : ""
           }`}
           id="hov-img"
           style={highlightedImage === "t7" ? highlightedStyle : {}}
         >
           <img
             className={`border border-1 ${
               highlightedImage === "t7" ? "green-border" : ""
             }`}
             src={t7}
             alt="cart-img"
             value="1"
           />
         </div>
         <div
           className={`p-2 ${
             highlightedImage === "t8" ? "highlighted" : ""
           }`}
           style={
             highlightedImage === "t8" ? highlightedStyle : {}
           }
         >
           <img
             className={`border border-1 ${
               highlightedImage === "t8" ? "green-border" : ""
             }`}
             src={t8}
             alt="cart-img"
             value="2"
           />
         </div>
         <div
           className={`p-2 ${
             highlightedImage === "t9" ? "highlighted" : ""
           }`}
           style={highlightedImage === "t9" ? highlightedStyle : {}}
         >
           <img
             className={`border border-1 ${
               highlightedImage === "t9" ? "green-border" : ""
             }`}
             src={t9}
             alt="cart-img"
             value="3"
           />
         </div>
       </div>
                 <div className="d-flex flex-row justify-content-left gap-3 lh-1" >
                   <div className="p-2 "><p className='fst-normal'> <span style={{marginLeft: "-70px"}}>Select Colour :</span>  
         <select className="form-select" style={{ width: '50%', marginLeft: '100px', marginTop: '-23px', padding: '3px 10px' }} 
             aria-label="Default select example" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}
       >
         <option value="1">White</option>
         <option value="2">Grey</option>
         <option value="3">Black</option>
       </select>
                   </p>
                   </div>
                   <div className="p-2 " style={{marginLeft: '5px'}}><p>Memory (GB):</p></div>
                   <div className="p-2 " style={{marginLeft: '18px'}}><p>Select Quantity:</p></div>
                 </div>
                 <div className="d-flex flex-row justify-content-left gap-1" style={{marginLeft: "10px"}}>
                 <button className='btn btn' style={{ border: '1px solid grey',borderRadius: '50%', backgroundColor: 'white', width: '50px', height: '50px' }}
                   onClick={() => handleColorChange("1")}>
                 </button>
                 <button className='btn btn' style={{ borderRadius: '50%', backgroundColor: 'grey', width: '50px', height: '50px' }}
                   onClick={() => handleColorChange("2")}>
                 </button>
                 <button className='btn btn' style={{ borderRadius: '50%', backgroundColor: 'black', width: '50px', height: '50px', marginRight: '-20px' }}
                  onClick={() => handleColorChange("3")}>
                 </button>
                   
                              <div class="p-2">
                                <select class="form-select ms-5 mb-5 w-75" aria-label="Default select example">
                                    <option selected value="1" className='active'>8 GB</option>
                                    <option value="2">16 GB</option>
                                    <option value="3">32 GB</option>
                                    <option value="4">64 GB</option>
                                  </select>
                              </div>
                              
                              <div className=" d-flex flex-row bg-light ms-3 p-5 pt-0">
       <button type='button' value={count} onChange={handleCount} className='btn btn border border-1' id='qty_btn'
          onClick={handleCount}disabled={count === 0}> 
          -
      </button>
       <button className='btn btn border border-1'>{count}</button>
       <button className='btn btn border border-1' onClick={() => setCount(count + 1)}>
         +
       </button>
     </div>
                        </div>

                
                        {/*  Shopping country code start */}
  
                        <div className='d-flex flex-row'>
                            <p>Select Shopping Country: <b>+ $ 30 USD</b></p> <br />
                        </div>
                            <div className='w-50'>
                              <select class="form-select" aria-label="Default select example">
                                <option selected value="1" className='active'>--Select Country--</option>
                                <option value="2">INDIA</option>
                                <option value="3">NEPAL</option>
                                <option value="4">SRILANKA</option>
                                <option value="5">BANGLADESH</option>
                                <option value="6">USA</option>
                                <option value="7">AUSTRALIA</option>
                                <option value="8">RUSSIA</option>
                                <option value="9">JAPAN</option>
                                <option value="10">CHINA</option>
                                <option value="11">DUBAI</option>
                              </select>
                            </div>  
                          </div>
                        
              {/*  1 row ----  2nd colomn started */}
  
  
                      <div className='col-lg bg-light text-start'>
                         <p>Price: </p>
                         <h1 className='d-inline'>$ 149 USD </h1><h3 className='d-inline'><strike className='d-inline' style={{ color: 'gray'}}> <b>$ 179 USD</b> </strike></h3><br /><br />
                         <button className='float-md-start btn btn-primary me-2'><i class="fa-solid fa-cart-plus"></i>  ADD TO CART</button>
                         <button className='float-md-start btn btn-danger'><i class="fa-solid fa-cart-plus"></i> BUY NOW </button>
                      </div>
                  </div>
            </div>
          </div>
        
    </div>
    )
  }


export default Vr;