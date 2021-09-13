import React, { Component } from "react";
import "./card.styles.css";
export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <span className="title">{this.props.title}</span>
        <br />
        <span className="description">{this.props.title}'s description</span>
      </div>
    );
  }
}
