//reusable ImageCard component

import React from "react";
import "./styles/ImageCard.css";

//pass the image into each card so all 12 are rendered
const ImageCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
    <div className="crop">
      <img alt={props.image.replace(".jpg", "")} src={require("../images/" + props.image)} />
    </div>
    </div>
  </div>
);

export default ImageCard;