import { Router, response, request } from 'express';
import ProfileController from '../controllers/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();

const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/show', profileController.show);

profileRouter.put('/', profileController.update);

export default profileRouter;
