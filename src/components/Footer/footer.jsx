import React from 'react';
import './footer.css';

const year = new Date().getFullYear();

const customStyle = {
    fontFamily: 'SoDo Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

function footer(){
    return(
        <footer className='float-start' style={{ customStyle }}>
            <div className='container'>
                <div className='row mx-3'>
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='py-3 fs-3'><h2 className='footer-h2'>About Us</h2></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Our Company</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Our Coffee</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Stories and News</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Starbucks Archive</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Investor Relations</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Customer Service</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='py-3'><h2 className='footer-h2'>Careers</h2></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Culture and Values</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Inclusion, Diversity and Equity</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>College Achievement Plan</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Alumni Community</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>U.S. Careers</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>International Career</a></li>
                        </ul>
                    </div>

                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='py-3'><h2 className='footer-h2'>Social Impact</h2></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>People</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Planet</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Enviornmental and Social Impact Reporting</a></li>
                        </ul>
                    </div>

                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='py-3'><h2 className='footer-h2'>Order and Pickup</h2></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Order on the App</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Order on the Web</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Delivery</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Order and Pickup Options</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Explore and Find Coffee for Home</a></li>
                        </ul>
                    </div>

                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='py-3'><h2 className='footer-h2'>For Business Partners</h2></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Landlord Support System</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Suppliers</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Corporate Gift Card Sales</a></li>
                            <li className='py-2'><a href='' className='text-decoration-none custom-link'>Office and Foodservice Coffee</a></li>
                        </ul>
                    </div>
                </div>

                <hr className='mx-3'></hr>

                <div className='row'>
                    <div className='col-3 mx-3 my-3 d-flex justify-content-around'>
                        <a href='https://open.spotify.com/user/starbucks' className='text-decoration-none' style={{ color: 'inherit' }}><i className="fa-brands fa-spotify fa-2xl"></i></a>
                        <a href='https://www.facebook.com/Starbucks/' className='text-decoration-none' style={{ color: 'inherit' }}><i className="fa-brands fa-facebook fa-2xl"></i></a>
                        <a href='https://www.pinterest.com/starbucks/' className='text-decoration-none' style={{ color: 'inherit' }}><i className="fa-brands fa-pinterest fa-2xl"></i></a>
                        <a href='https://www.instagram.com/starbucks/' className='text-decoration-none' style={{ color: 'inherit' }}><i className="fa-brands fa-instagram fa-2xl"></i></a>
                        <a href='https://www.youtube.com/starbucks' className='text-decoration-none' style={{ color: 'inherit' }}><i className="fa-brands fa-youtube fa-2xl"></i></a>
                        <a href='https://twitter.com/starbucks/' className='text-decoration-none' style={{ color: 'inherit' }}><i className="fa-brands fa-twitter fa-2xl"></i></a>
                    </div>
                </div>

                <div className='row'>
                    <div className='col mx-3 my-3'>
                    <p><a href="#" className="custom-link2 mx-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Privacy Notice</a> | <a href="#" className="custom-link2 mx-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Terms of Use</a> | <a href="#" className="custom-link2 mx-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Do Not Share My Personal Information</a> | <a href="#" className="custom-link2 mx-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">CA Supply Chain Act</a> | <a href="#" className="custom-link2 mx-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Accessibility</a> | <a href="#" className="custom-link2 mx-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Cookie Prefernces</a></p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col mx-3 my-3'>
                        <p style={{ opacity: '0.6' }}>© {year} Starbucks Coffee Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;