import React from "react";

const NavBar = () => {
	return (
<div class="container">
        <div class="row">
            <div class="col-12 bg-dark">
                <ul class="nav">
                    <li class="nav-item">
                      <a class="nav-link link-light active" aria-current="page" href="#">Start Bootstrap</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link link-light" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link link-light" href="#">Services</a>
                    </li>
                   
                    <li class="nav-item">
                    <a class="nav-link link-light" href="#">Contact</a>
                    </li>
                  </ul>
            </div>
        </div>
    </div>
);
};

export default NavBar;