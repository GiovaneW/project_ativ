import { Router } from 'express';
import ActivitiesRouter from './Activities.router';

const routes = Router();

routes.get('/', (request, response) =>{
    return response.json({ message: 'Server its OK!' });
});
routes.use('/activities', ActivitiesRouter);

export default routes;
