import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivitie1617500192670 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'activities',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',//se não colocar o banco não gera o uuid automaticamente
                    },
                    {
                        name: 'title_project',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'time_init',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                    {
                        name: 'time_out',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('activities');
    }

}
