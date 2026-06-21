import { Router } from 'express';
import ShowController from '../controllers/showController';

const router = Router();
const showController = new ShowController();

export function setRoutes(app) {
    app.use('/shows', router);
    router.get('/', showController.getAllShows.bind(showController));
    router.get('/:id', showController.getShowById.bind(showController));
}