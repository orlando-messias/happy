import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanesController.index);
routes.get('/orphanages/:id', OrphanesController.show);
routes.post('/orphanages', upload.array('images'), OrphanesController.create);

export default routes;