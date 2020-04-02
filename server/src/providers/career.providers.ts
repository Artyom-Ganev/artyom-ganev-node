import { Connection } from 'mongoose';
import { CareerModel } from '../model/career.model';

export const careerProviders = [
  {
    provide: 'CAREER_MODEL',
    useFactory: (connection: Connection) => connection.model('CAREER_MODEL', CareerModel),
    inject: ['DATABASE_CONNECTION']
  }
];
