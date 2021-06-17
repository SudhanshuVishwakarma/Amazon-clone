import React from "react";
import { Link } from "react-router-dom";
import "./prime.css";
function Prime() {
  return (
    <div className="Prime_detail">
      <div className="prime_container">
        <Link>
          <img
            className="prime_logo"
            src="https://logodownload.org/wp-content/uploads/2019/10/amazon-prime-logo-1.png"
            alt=""
          />
        </Link>
        <h1 className="prime_title">Welcome to Prime Video</h1>

        <form action="https://www.primevideo.com/">
          <button className="prime_button" type="click" value="Move to Prime">
            Stream prime
          </button>
        </form>
      </div>
      <div className="Image"></div>
    </div>
  );
}

export default Prime;
