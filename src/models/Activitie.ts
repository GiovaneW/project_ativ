import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('activities')
class Activitie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title_project: string;

    @Column('time with time zone')
    time_init: Date;

    @Column('timestamp with time zone')
    time_out: Date;

}




export default Activitie;
