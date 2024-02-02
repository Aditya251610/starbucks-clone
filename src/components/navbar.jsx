import React from 'react';
import ReactDOM from 'react-dom/client'
import Signin from '../components/Sign In/signin';

function btnClick(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Signin />
        </React.StrictMode>
    );
}

const customStyle = {
    fontFamily: 'SoDo Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

function navbar(){
    return(
        <div style={{customStyle}}>
            <nav className="navbar navbar-expand-lg px-4" style={{backgroundColor:"#181A1B"}}>
                <a class="navbar-brand p-4" href="#">
                    <img src="data:image/png;base64,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" width="30" height="30" class="d-inline-block align-top" alt="" />
                </a>
                <div className="collapse navbar-collapse clearfix" id="navbarNav">
                    <ul className="navbar-nav float-start">
                        <li className="nav-item">
                            <a className="nav-link fs-7" style={{ fontWeight:"bold", color: "#7AFFCE" }} href="#">MENU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-7 ms-2" style={{ fontWeight:"bold", color: "#7AFFCE" }} href="#">REWARDS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-7 ms-2" style={{ fontWeight:"bold", color: "#7AFFCE" }} href="#">GIFT CARD</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto px-3">
                        <li className="nav-item active ms-3">
                            <a className="nav-link fs-6" style={{ fontWeight:"bold", color: "#7AFFCE" }} href="#">
                                <i className="fa-solid fa-location-dot fa-lg me-2"></i>
                                Find a Store
                            </a>
                        </li>
                        <li className="nav-item fs-6">
                            <button type="button" className="btn btn-outline-light rounded-pill ms-2" style={{ backgroundColor:"#181A1B", color: "#7AFFCE" }} onClick={btnClick}>Sign In</button>
                        </li>
                        <li class="nav-item fs-6">
                            <button type="button" className="btn btn-outline-dark rounded-pill ms-3" style={{ color: "#7AFFCE", backgroundColor: "black" }}>Join Now</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default navbar;