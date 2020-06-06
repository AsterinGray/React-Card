import React, { Component } from "react";
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <Title />
        <Image />
        <Description />
      </div>
    );
  }
}

export default Card;
