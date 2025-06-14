console.log('The Game!');

let score = 0;

class Player {
  

  constructor(name, avatar) {
    this.name = name;
    this.avatar = avatar;
    this.score = score;
  }

  get score() {
    return this.score;
  }

  set score(value) {
    if (value === 'number' && value >= 0) {
      this.score += score;
    } else {
      throw new Error('Score must be a non-negative number');
    }
  }
}