//Parent class

class Game {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName = () => this.name;
  getType = () => this.type;
}

// Sub classes

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
