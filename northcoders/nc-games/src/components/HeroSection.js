import React from "react";
import { Button } from "./Button";
import './HeroSection.css'
function HeroSection() {
  return (
    <div className="hero-container">
      <div>
        <iframe
          src="https://giphy.com/embed/HPA8CiJuvcVW0"
          width="100%"
          height="100%"
          style="position:absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <h1>Find, Review and share</h1>
        <p>What are you waiting for?</p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
