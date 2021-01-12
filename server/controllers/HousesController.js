import BaseController from "../utils/BaseController"
import { housesService } from "../services/HousesService"

export class HousesController extends BaseController {
    constructor() {
        super("api/houses")
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
            .put('/:id', this.edit)
    }

    async getAll(req, res, next) {
        try {
            res.send(await housesService.getAll(req.query))
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            res.send(await housesService.create(req.body))
        } catch (e) {
            next(e)
        }
    }

    async remove(req, res, next) {
        try {
            res.send(await housesService.remove(req.params.id))
        } catch (e) {
            next(e)
        }
    }
    async edit(req, res, next) {
        try {
            res.send(await housesService.edit(req.params.id, req.body))
        } catch (e) {
            next(e)
        }
    }
}