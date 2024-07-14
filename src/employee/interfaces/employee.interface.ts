import { Document } from 'mongoose';

export interface Employee extends Document {
  readonly name: string;
  readonly score: number;
  readonly role: string;
  pokemon?: any;
}
