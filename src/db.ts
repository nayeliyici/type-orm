import { DataSource } from "typeorm";
import {User} from '../src/entity/User';
import { Empleado } from "./entity/empleado";
import { Area } from "./entity/Area";
import { Edificio } from "./entity/Edificio";
import { Vale } from "./entity/vale";

export const AppDataSourse = new DataSource({
    type: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    username: 'postgres',
    password: 'uIbUesEZOXpPGCtzNHCqEuCdLTOOZquM',
    port: 23072,
    database: 'railway',
    entities: [User,Empleado, Edificio, Area, Vale],
    logging: true,
    synchronize: true
})