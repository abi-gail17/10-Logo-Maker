const Shape = require('./shapes');

const { Shape, Circle, Triangle, Square } = require('./shape');

describe('Shape Classes', () => {
  test('Circle should render correctly', () => {
    const redCircle = new Circle('red');
    expect(redCircle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red"/>');
  });

  test('Triangle should render correctly', () => {
    const blueTriangle = new Triangle('blue');
    expect(blueTriangle.render()).toEqual('<polygon points="100,200 200,200 150,100" fill="blue"/>');
  });

  test('Square should render correctly', () => {
    const greenSquare = new Square('green');
    expect(greenSquare.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green"/>');
  });
});