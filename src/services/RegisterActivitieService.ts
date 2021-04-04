import { isValid } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import { uuid } from 'uuidv4';

import Activitie from '../models/Activitie';
import ActivitiesRepository from '../repositories/ActivitiesRepository';


interface RequestDTO{
    title_project: string;
    time_init: Date;
    time_out: Date;
}

class RegisterActivitieService{
    public async run ({title_project, time_init, time_out}: RequestDTO): Promise<Activitie>{

        const activitiesReporitory = getCustomRepository(ActivitiesRepository);

        if(title_project == null || !isValid(time_init) || !isValid(time_out)){
            throw Error("One or more variables are empty or invalid, please check the request body and resend that requisition.");
        }

        //está criando o objeto que será registrado no banco de dados
        const activitie = activitiesReporitory.create({
            title_project,
            time_init,
            time_out,
        });

        //salvando o dado criado no banco de dados
        await activitiesReporitory.save(activitie);

        return activitie;
    }
}

export default RegisterActivitieService;
