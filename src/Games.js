/**
 * @desc: React version of inheritance
 * @author: atidivya
 */

import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      type: props.type,
    };
  }

  getName = () => this.state.name;
  getType = () => this.state.type;

  render() {
    return (
      <div>
        <span>Game Type: {this.state.type}</span>
      </div>
    );
  }
}

export class Slot extends Game {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      rtp: props.rtp,
    };
  }

  render() {
    return (
      <div>
        <span>Name: {this.getName()}</span>
        {super.render()}
        <span> RTP: {this.state.rtp} </span>
      </div>
    );
  }
}

export class Bingo extends Game {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      isMobileFriendly: props.isMobileFriendly,
    };
  }

  render() {
    return (
      <div>
        <span>Name: {this.getName()}</span>
        {super.render()}
        <span> Mobile Friendly: {this.state.isMobileFriendly} </span>
      </div>
    );
  }
}

/**
 * @desc: ES6 version of inheritance
 */

/*

//Parent class

class Game {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName = () => this.name;
  getType = () => this.type;
}

*/

// Sub classes

/*

export class Slot extends Game {
  constructor(name, type, rtp) {
    super(name, type);
    this.rtp = rtp;
  }

  getRtp = () => this.rtp;
}

export class Bingo extends Game {
  constructor(name, type, mobileFriendly) {
    super(name, type);
    this.mobileFriendly = mobileFriendly;
  }

  getMobileFriendly = () => this.mobileFriendly;
}

*/
