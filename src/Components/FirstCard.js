import React from 'react'
import star from "../images/star.png";
const FirstCard = () => {

    const data=[
        {
            src:"https://images.91wheels.com//assets/b_images/main/models/profile/profile1629346089.png?width=360",
            name:"Honda Amaze 2021",
            rating:" 190rating/15answer",
            price:"₹ 6.32 - 11.50 Lakh*"

        }
    ]
  return (
    <div>

       
         <div className="card">
        <div className="image_block">
          <img
            src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1629346089.png?width=360"
            alt=""
          />
        </div>
        <div className="text_block">
          <h1>Honda Amaze 2021</h1>
          <p>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            190rating/15answer
          </p>
          <p>
            <strong>₹ 6.32 - 11.50 Lakh*</strong>
          </p>
          <p>
            <span className="text">*Ex-showroom Price in</span>{" "}
            <a className="newDelhi" href="">
              New Delhi{" "}
            </a>
          </p>
          <p className="button_style">
            <button className='card_btn'>View Festive Offer </button>
            <button className='card_btn'>Contact Dealer </button>
          </p>
          <p>
            <span className="text">offer will expire in</span> 30days
          </p>
        </div>
      </div>
    </div>
  )
}

export default FirstCard