import { Controller, Post, Body, Param, Get, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './interfaces/employee.interface';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() createEmployeeDto: Employee) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get(':id')
  async getEmployee(@Param('id') id: string) {
    return this.employeeService.getEmployee(id);
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: Employee,
  ) {
    return this.employeeService.updateEmployee(id, updateEmployeeDto);
  }
}
