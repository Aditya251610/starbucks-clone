import React from 'react';
import Navbar from '../navbar'
import Footer from '../Footer/footer'

function signinApp(){
    return(
        <div>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <h3 className='my-3'>Sign in to create an account</h3>
                <div className='card d-flex justify-content-center align-items-center shadow-lg my-5'>
                    <div className='card-body my-5'>
                        <div className='signin-card my-3' style={{ zIndex: '2', width:'600px' }}>
                            <p>* indicates the required feild</p>

                            <div class="mb-3">
                                <input type="email" className="form-control w-100" id="exampleFormControlInput1" placeholder="*Username or email address" />
                            </div>

                            <div class='mb-3'>
                                <input type="password" id="inputPassword5" className="form-control w-100" aria-describedby="passwordHelpBlock" placeholder='*Password' />
                            </div>

                            <div className='d-flex flex-row align-items-center my-3'>
                                <input type="checkbox" id="signedin" style={{ height: '30px', width: '30px' }} className='my-3' />
                                <label for="vehicle1" className='mx-3'>Keep me signed in.</label>
                            </div>

                            <div className='my-3'>
                                <a href=''>Forgot your username?</a><br></br>
                                <a href=''>Forgot your password?</a>
                            </div>

                            <div className='d-flex flex-row float-end align-items-center'>
                                <button type="button" className="btn btn-outline-light rounded-pill ms-2 btn-lg" style={{ backgroundColor:"#005E3B", color: "#7AFFCE" }}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center my-5 text-center' style={{width:'400px'}}>
                    <h6>JOIN STARBUCKS® REWARDS</h6>
                    <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
                    <button type="button" className="btn btn-outline-light rounded-pill ms-2 btn-lg" style={{ backgroundColor:"inherit", color: "#7AFFCE" }}>Join Now</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default signinApp;