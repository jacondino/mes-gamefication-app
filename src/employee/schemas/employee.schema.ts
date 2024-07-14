import { Schema } from 'mongoose';

export const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
  role: { type: String, required: true },
  pokemon: {
    id: { type: Number, required: false },
    name: { type: String, required: false },
    image: { type: String, required: false },
  },
});
