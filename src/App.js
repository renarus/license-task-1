import './App.css';
import { useState } from 'react';
import { Data } from './licenseData/Data';
import { Link } from 'react-router-dom';
function App() {
  const [selectedLicense,setSelectedLicense]=useState()
  const [selectedCount,setSelectedCount]=useState(1)

   let total=selectedLicense? selectedLicense.price*selectedCount:0
   const options=[1,2,3,4,5,6,7,8,9,10].map((i)=>{
    return(
    <option key={i} value={i}>{i}</option>
    )
   })
   
  return (
    <div className="App">
      <div className="license-box">
        <div className="first-part">
        {Data.map((item,index)=>{
          return(
          <div key={index} className={`form-check ${selectedLicense && selectedLicense.id===item.id ? 'selected': ''}`} >
          <div className="form-elmnts" >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={()=>setSelectedLicense(item)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1" >
            {item.name}
          </label>
          </div>
          <p>${item.price} per license</p>
        </div>
        
       ) })}
         
        </div>
       <div className="second-part">
       <div className="select-count-box">
              <p>Number of licenses: </p>
              <select aria-label="select button" aria-controls="select-dropdown" onChange={(e)=>setSelectedCount(Number(e.target.value))}>
                {options}
              </select>

        </div>
       </div>
        <div className="total-amount-box">
          <div className="amount-text">
          <h1> Total :  <span>${total}<sup>US</sup></span></h1>
          </div>
          <Link to='/buy' className='button'><p>Buy Now</p></Link>
        </div>
        <div className="plan-num">
        <p>Selected plan : {selectedLicense ? `#${selectedLicense.id}` : null} </p>
       </div>
      </div>
    </div>
  );
}

export default App;
