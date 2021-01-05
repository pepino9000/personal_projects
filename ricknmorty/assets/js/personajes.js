export default class Personajes{
    constructor(id) {
      this._id = function() {
          return id;
      }
    }
    get id(){
       return this._id();
    }
    set id(id){
       this._id = function() {
       return id;
       }
    }
}