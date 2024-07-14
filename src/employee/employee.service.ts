// src/employee/employee.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './interfaces/employee.interface';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
    private readonly httpService: HttpService,
  ) {}

  async createEmployee(employeeData: Employee): Promise<Employee> {
    const pokemon = await this.getPokemonByScore(employeeData.score);

    const createdEmployee = new this.employeeModel({
      ...employeeData,
      pokemon,
    });

    return createdEmployee.save();
  }

  async updateEmployee(id: string, employeeData: Employee): Promise<Employee> {
    const existingEmployee = await this.employeeModel.findById(id).exec();
    let pokemon = existingEmployee.pokemon;

    if (
      this.getScoreCategory(existingEmployee.score) !==
      this.getScoreCategory(employeeData.score)
    ) {
      pokemon = await this.getPokemonByScore(employeeData.score);
    }

    return this.employeeModel
      .findByIdAndUpdate(id, { ...employeeData, pokemon }, { new: true })
      .exec();
  }

  async getEmployee(id: string): Promise<Employee> {
    return this.employeeModel.findById(id).exec();
  }

  private async getPokemonByScore(score: number): Promise<any> {
    const pokemonId = this.getScoreCategory(score);

    const response: any = await this.httpService
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .pipe(map((response) => response.data))
      .toPromise();

    return {
      id: response?.id,
      name: response?.name,
      image: response?.sprites?.front_default,
    };
  }

  private getScoreCategory(score: number): number {
    if (score >= 0 && score < 10) {
      return 19;
    } else if (score >= 10 && score < 20) {
      return 4;
    } else if (score >= 20) {
      return 6;
    }
  }
}
