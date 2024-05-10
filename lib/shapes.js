class Circle {
    constructor() {
      this.shape = 'circle';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `
        <svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="50" fill="${this.color}" />
        </svg>
      `.replace(/\s+/g, ' ').trim();
    }
  }

  class Triangle {
    constructor() {
      this.shape = 'triangle';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `
        <svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,20 180,180 20,180" fill="${this.color}" />
        </svg>
      `.replace(/\s+/g, ' ').trim();
    }
  }

  class Square {
    constructor() {
      this.shape = 'square';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `
        <svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="100" height="100" fill="${this.color}" />
        </svg>
      `.replace(/\s+/g, ' ').trim();
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };