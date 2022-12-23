function PokeBall(size, color) {
    // props
    this._size = size;
    this._color = color;
 
    // methods/-fuctions
    this.getSize = function() {
      console.log(this._size);
    };
    this.getColor = function() {
      console.log(this._color);
    }
 };
 
 const ultraBall = new PokeBall(3, 'black');
 ultraBall.getColor()
 ultraBall.getSize()

//APLICAR HERENCIA CON PORTOTYPE crendo una fuction que tendra internatmente fuctiones hijas
 function Aretes(size, color,material) {
    // props
    this._size = size;
    this._color = color;
    this._material = material;
 
    // methods/-fuctions
    this.getSize = function() {
      console.log(this._size);
    };
    
    this.getColor = function() {
      console.log(this._color);
    }

    this.getMaterial = function() {
        console.log(this._material);
      }
 };
 
 const pendietes = new Aretes(2, 'plateado','oro');
pendietes.getColor()
pendietes.getMaterial()
