import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "./AxiosService.js"

class CarsService {
    async deleteCar(id) {
        await api.delete('cars/' + id)
        ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
    }
    async createCar(newCar) {
        let carData = await api.post('cars', newCar)
        console.log(carData);
        let car = new Car(carData.data)
        ProxyState.cars = [...ProxyState.cars, car]
    }
    async loadCars() {

        let carData = await api.get('cars')
        console.log(carData);
        ProxyState.cars = carData.data.map(c => new Car(c))
    }
}
// Singleton Pattern
export const carsService = new CarsService()