import Personajes from "./personajes.js";

export default class DetallesPersonajes extends Personajes {
  constructor(
    id,
    name,
    status,
    species,
    gender,
    created,
    origin,
    location,
    episode
  ) {
    super(id);
    this._name = name;
    this._status = status;
    this._species = species;
    this._gender = gender;
    this._created = created;
    this._origin = origin;
    this._location = location;
    this._episode = episode;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get status() {
    return this._status;
  }
  set status(status) {
    this._status = status;
  }
  get species() {
    return this._species;
  }
  set species(species) {
    this._species = species;
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }
  get created() {
    return this._created;
  }
  set created(created) {
    this._created = created;
  }
  get origin() {
    return this._origin;
  }
  set origin(origin) {
    this._origin = origin;
  }
  get location() {
    return this._location;
  }
  set location(location) {
    this._location = location;
  }
  get episode() {
    return this._episode;
  }
  set episode(episode) {
    this._episode = episode;
  }
  infoModal = function () {
    let modal = document.getElementById("modal-result");
    modal.innerHTML =
      "<h5 class='modal-title'>Datos de personaje</h5>" +
      "ID: " +
      this.id +
      "<br>" +
      "Nombre: " +
      this.name +
      "<br>" +
      "Género: " +
      this.gender +
      "<br>" +
      "Especie: " +
      this.species +
      "<br>" +
      "Status: " +
      this.status +
      "<br>" +
      "Creado: " +
      this.created +
      "<br>" +
      "Origen: " +
      this.origin +
      "<br>" +
      "Cantidad de episodios: " +
      this.episode;
  };
  infoGeneral = async (resultados, imagen) => {
    let img_id = `<div class="col-6 col-sm-2 image">
            <img src="${imagen}" meta-id="${this.id}" class='img-modal'></img>
            <br>
            <br>
        </div>
        <div class="col-6 col-sm-2 texto">
            <span class='name'>${this.name}</span>
            <br>
            <span>${this.species}</span>
        </div>
        `;
    try {
      $(resultados).append(img_id);
    } catch (err) {
      console.log(err);
    }
  };
}
