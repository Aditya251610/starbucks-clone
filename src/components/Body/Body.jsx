import React from 'react';
import './style.css'

const customStyle = {
    fontFamily: 'SoDo Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
};
function Body(){
    return(
        <div style={{customStyle}} className='d-flex justify-content flex-column'>
            <div className='row py-2 px-2 mx-3 my-3'>
                <div className='col-6'>
                    <img className='h-100 w-100' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88469.jpg' />
                </div>

                <div className='col-6 d-flex align-items-center justify-content-center flex-column ' style={{ backgroundColor: "#6B6F18" }}>
                    <h1 className='my-3 mx-5 text-center' style={{ fontSize: '5rem' }}>Introducing Oleato<sup style={{ fontSize: '0.5em' }}>TM</sup></h1>
                    <h4 className='my-3 mx-5 text-center' style={{ fontWeight: 'normal' }}>A luxuriously smooth coffee experience perfectly balanced with Partanna® extra virgin olive oil.</h4>
                    <button type="button" className="my-3 mx-5 text-center btn btn-outline-light rounded-pill btn-opacity ms-2" style={{ backgroundColor:"#6B6F18", color: "#7AFFCE" }}>Order Now</button>
                </div>
            </div>

            <div className='row py-2 px-2 mx-3 my-3'>
                <div className='col-6 d-flex align-items-center justify-content-center flex-column' style={{ backgroundColor: '#23435B' }}>
                    <h1 className='my-3 mx-5 text-center' style={{ fontSize: '5rem' }}>Savory and satisfying</h1>
                    <h4 className='my-3 mx-5 text-center' style={{ fontWeight: 'normal' }}>Grab a subtlt sweet Chicken, Maple Butter & Egg Sandwich on the way.</h4>
                    <button type="button" className="btn btn-outline-dark rounded-pill btn-opacity ms-2" style={{ backgroundColor:"#23435B", color: "#7AFFCE" }}>Order Now</button>
                </div>

                <div className='col-6'>
                    <img className='w-100' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88294.jpg'></img>
                </div>
            </div>

            <div className='row py-2 px-2 mx-3 my-3'>
                <div className='col-6'>
                    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88510.jpg' className='w-100' />
                </div>

                <div className='col-6 d-flex align-items-center justify-content-center flex-column' style={{ backgroundColor: "#5D2A13" }}>
                    <h3 className='my-3 mx-5 text-center'>Love at First Sip Duo, now in the app</h3>
                    <h6 className='my-3 mx-5 text-center' style={{ fontWeight: 'normal' }}>Join Starbucks® Rewards and say “be mine” to the Chocolate-Covered Strawberry Crème Frappuccino® drink or Chocolate Hazelnut Cookie Cold Brew, perfect for sharing. Here for a limited time.</h6>
                    <button type="button" className="my-3 mx-5 text-center btn btn-outline-dark rounded-pill btn-opacity ms-2" style={{ backgroundColor:"#5D2A13", color: "#7AFFCE" }}>Download to order</button>
                </div>
            </div>

            <div className='row py-2 px-2 mx-3 my-3'>
                <div className='col-6 d-flex align-items-center justify-content-center flex-column' style={{ backgroundColor: '#6B6F18' }}>
                    <h4 className='my-3 mx-5 text-center' >Our Latest Collection</h4>
                    <h5 className='my-3 mx-5 text-center' style={{ fontWeight: 'normal' }}>Damon Brown celebrates Black culture and his take on community using surprising color palettes, angles, and shapes in this artist series.</h5>
                    <button type="button" className="btn btn-outline-dark rounded-pill btn-opacity ms-2" style={{ backgroundColor:"#6B6F18", color: "#7AFFCE" }}>Meet Damon</button>
                </div>

                <div className='col-6'>
                    <img className='w-100' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88488.jpg'></img>
                </div>
            </div>

            <div className='row py-2 px-2 mx-3 my-3'>
                <div className='col-6'>
                    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88373.jpg' className='w-100'/>
                </div>

                <div className='col-6 d-flex align-items-center justify-content-center flex-column' style={{ backgroundColor: "#182E28" }}>
                    <h3 className='my-3 mx-5 text-center'>Your go-to brought to you</h3>
                    <h5 className='my-3 mx-5 text-center' style={{ fontWeight: 'normal' }}>Enjoy 20% off Starbucks orders of $15+ on DoorDash. Offer valid 1/22-2/4. New customers only. Max discount up to $5. Terms apply.*</h5>
                    <button type="button" className="my-3 mx-5 text-center btn btn-outline-light rounded-pill btn-opacity ms-2" style={{ backgroundColor:"#182E28", color: "#7AFFCE" }}>Order Now</button>
                </div>
            </div>

            <div className='row py-2 px-2 mx-3 my-3'>
                <div className='col-6 d-flex align-items-center justify-content-center flex-column' style={{ backgroundColor: '#004E34' }}>
                    <h3 className='my-3 mx-5 text-center'>"This is our community. We're in it together."</h3>
                    <h5 className='my-3 mx-5 text-center' style={{ fontWeight: 'normal' }}>-Olivia, Starbucks Partner(Employee)</h5>
                    <h5 className='my-3 mx-5 text-center' style={{ fontWeight: 'normal' }}>Our partners uplift each other and their communities every day.</h5>
                    <button type="button" className="btn btn-outline-dark rounded-pill btn-opacity ms-2" style={{ backgroundColor:"#004E34", color: "#7AFFCE" }}>Learn More</button>
                </div>

                <div className='col-6'>
                    <img className='w-100' src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88333.jpg'></img>
                </div>
            </div>

            <div className='row py-2 px-2 mx-3 my-3 w-50 mx-auto'>
                <p className=''>
                *Valid 1/22-2/4, enjoy 20% off your Starbucks order of $15 or more through the DoorDash app, excluding taxes and fees. Maximum discount is up to $5. New customers only. Restrictions and other taxes/fees/gratuity still apply. See DoorDash app for details and location availability. Fees subject to change. Restricted delivery area. Menu limited. Delivery orders may be limited to a maximum subtotal no more than $100, excluding taxes and fees, on any single transaction. We may adjust this limit at any time at our discretion. Product image may vary from delivered product. Available at participating locations only. All deliveries subject to availability. Must have or create a valid DoorDash account with valid form of accepted payment on file. No cash value. Non-transferable. Prices for Starbucks items purchased through DoorDash may be higher than as marked or posted in stores. May not be combined with other offers, discounts or promotions. See DoorDash terms and conditions at <a href='' className='custom-btn '>help.doordash.com/consumers/s/article/offer-terms-conditions.</a>
                </p>
            </div>
        </div>
    );
}

export default Body;