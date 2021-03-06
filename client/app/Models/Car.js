import { generateId } from "../Utils/GenerateId.js"

export default class Car {
    constructor({ make, model, year, price, description, imgUrl, _id }) {
        this.id = _id
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
    }

    get Template() {
        return `
    <div class="col-md-4 col-6 pb-3 px-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.make} ${this.model} - ${this.year}</h4>
            <p class="card-text">${this.description}</p>
            <h5 class="card-text">Asking Price: $${this.price}</h5>
            <div class="text-right">
                <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
    }
}