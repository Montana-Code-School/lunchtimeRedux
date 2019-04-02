import React, { Component } from 'react';

class Lunch extends Component {

  render() {
    return (
      <div className="Lunch">
        <p>for lunch i ate {this.props.lunch} </p>
        <p>after i at the {this.props.lunch}, i was thirsty and I drank a {this.props.drink}</p>
        <p>and me and courtney said {this.props.chitchat}.</p>
      </div>
    );
  }
}

export default Lunch;
