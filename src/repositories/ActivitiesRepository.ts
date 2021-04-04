import { Entity, EntityRepository, Repository } from 'typeorm';

import Activitie from '../models/Activitie';

@EntityRepository(Activitie)
class ActivitieRepository extends Repository<Activitie> {
    public async findById(id: string): Promise<Activitie | null>{
        const findActivitie = await this.findOne({
            where: { id },
        });

        return findActivitie || null;
    }


}

export default ActivitieRepository;
