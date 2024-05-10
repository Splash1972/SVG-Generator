const { Circle } = require('./shapes');

test('renders SVG for circle shape', () => {
  const circle = new Circle();
  circle.setColor('red');
  const svg = circle.render();
  const parsedSVG = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="50" fill="red" /> </svg>';

  expect(svg).toBe(parsedSVG);
});

const { Triangle } = require('./shapes');

test('renders SVG for triangle shape', () => {
  const triangle = new Triangle();
  triangle.setColor('red');
  const svg = triangle.render();
  const parsedSVG = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="100,20 180,180 20,180" fill="red" /> </svg>';

  expect(svg).toBe(parsedSVG);
});

const { Square } = require('./shapes');

test('renders SVG for square shape', () => {
  const square = new Square();
  square.setColor('red');
  const svg = square.render();
  const parsedSVG = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="50" width="100" height="100" fill="red" /> </svg>';

  expect(svg).toBe(parsedSVG);
});
