import React from 'react'
import icon from "../images/icon.png";
import engine from "../images/engine.png";
const SecondCard = () => {
    const data=[
        {
            name:"Honda Amaze 2021 Specifications",
            Mileage:"17.65 to 24.3 kmpl",
            Engine:"1199-1498 cc",
            Fuel:"22.65 kmpl",
            Transmission:"Mannual/Automatic"
        }
    ]
  return (
    <div>
        
         <div className="card">
        <div className="text_block">
         
          {
            data.map((e)=>{
                return (
                    <>
                     <div>
            <h2>{e.name}</h2>
          </div>
                        <div className="all_items">
            <div className="items">
              <div className="inner_item">
                <span className="small_text_head">
                  <img src={icon} alt="loading" /> Mileage
                </span>
                <p className="small_text"> {e.Mileage}</p>
              </div>
              <div className="inner_item">
                <span className="small_text_head">
                  {" "}
                  <img src={engine} alt="loading" /> Engine
                </span>
                <p className="small_text">{e.Engine}</p>
              </div>
            </div>
            <div className="items1">
              <div className="inner_item">
                <span className="small_text_head">
                  {" "}
                  <img src={engine} alt="loading" />
                  Fuel
                </span>
                <p className="small_text">{e.Fuel}</p>
              </div>
              <div className="inner_item">
                <span className="small_text_head">
                  <img src={engine} alt="loading" /> Transmission
                </span>
                <p className="small_text">{e.Transmission}</p>
              </div>
            </div>
          </div>
                    </>
                )
            })
          }
          <div>
            <a className="view_more" href="">
              View more Specifications
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondCard