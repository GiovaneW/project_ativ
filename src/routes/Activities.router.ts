import { response, Router } from 'express';
import { parseISO, isEqual} from 'date-fns';
import {getCustomRepository} from 'typeorm';

import ActivitieRepository from '../repositories/ActivitiesRepository';
import RegisterActivitieService from '../services/RegisterActivitieService';

const ActivitiesRouter = Router();



ActivitiesRouter.get('/', async (request, response) => {
    const activitiesRepository = getCustomRepository(ActivitieRepository);
    const activities = await activitiesRepository.find(); //sempre precisa do await quando for fazer uma query no db


    return response.json(activities);
});

ActivitiesRouter.get('/find_one', async (request, response) =>{
    const {id} = request.body;
    const activitiesReporitory = getCustomRepository(ActivitieRepository);
    const activitie = await activitiesReporitory.findById(id);

    return response.json(activitie);
});

ActivitiesRouter.post('/', async (request, response) =>{

    try{
        const { title_project, time_init, time_out } =  request.body;

        const parsedDateIni = parseISO(time_init);
        const parsedDateOut = parseISO(time_out);

        const registerActivitieService = new RegisterActivitieService();

        const activitie = await registerActivitieService.run({title_project, time_init: parsedDateIni, time_out: parsedDateOut});

        return response.json(activitie);
    }catch(err){
        return response.status(400).json({error: err.message});
    }
});

export default ActivitiesRouter;
