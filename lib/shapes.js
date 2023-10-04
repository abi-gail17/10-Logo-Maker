class Shape {
    constructor(fillColor) {
        this.fillColor = fillColor;
      }
      render() {
        throw new Error('Child class must implement a render method');
      }
    
}

class Circle extends Shape{
    constructor(fillColor){
        super(fillColor);
    }
    render(){
        return `<circle cx="150" cy="100" r="150" fill="${this.fillColor}"/>`;
    }
}

class Triangle extends Shape{
    constructor(fillColor){
        super(fillColor);
    }

    render(){
        return `<polygon points="150,0 250,200 50,200" fill="${this.fillColor}"/>`;
    }
}

class Square extends Shape{
    constructor(fillColor){
        super(fillColor);
    }
    render(){
        return `<rect x="100" y="50" width="200" height="200" fill="${this.fillColor}"/>`;
    }
}

module.exports = { Shape, Circle, Square, Triangle}