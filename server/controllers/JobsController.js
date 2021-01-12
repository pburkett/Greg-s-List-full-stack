import BaseController from "../utils/BaseController"
import { jobsService } from "../services/JobsService"


export class JobsController extends BaseController {

    constructor() {
        super("api/jobs")
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            res.send(await jobsService.getAll(req.query))
        } catch (e) {
            next(e)
        }
    }
    async create(req, res, next) {
        try {
            res.send(await jobsService.create(req.body))
        } catch (e) {
            next(e)
        }
    }
    async remove(req, res, next) {
        try {
            res.send(await jobsService.remove(req.params.id))
        } catch (e) {
            next(e)
        }
    }
}