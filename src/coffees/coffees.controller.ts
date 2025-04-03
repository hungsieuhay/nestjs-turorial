import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/udpate-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeService.create(createCoffeeDto);
  }

  @Patch(':id')
  updated(@Param('id') id: string, @Body() udpateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeService.update(id, udpateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeService.remove(id);
  }
}
