import React from 'react'
import thumb_up from '../images/thumb_up.png'
import thumbs_down from '../images/thumbs_down.png'
const ThirdCard = () => {
    const data=[
        {
            name:"91Wheels Expert Opinion about Honda Amaze 2021",
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
            
            data.map((ele)=>{
                return(
                   <>
                         <div>
            <h3>{ele.name}</h3>
          </div>
          <div className="text_margin">
            <img src={thumb_up} alt="loading" /> <b>Features we admire in this car</b>
            <ul className='bulletGreen'>
              <li> One of the best looking hatchbacks ever </li>
              <li> Rides like a bigger vehicle - comfortable</li>
              <li> India’s safest hatchback</li>
            </ul>
          </div>
                   </>
                )
            })
         }
          <div className="text_margin">
            
            <img src={thumbs_down} alt="loading"/>  <b>Features we don’t admire in this car</b>
            <ul className='bulletRed'>
              <li> One of the best looking hatchbacks ever </li>
              <li> Rides like a bigger vehicle - comfortable</li>
              <li> India’s safest hatchback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdCard