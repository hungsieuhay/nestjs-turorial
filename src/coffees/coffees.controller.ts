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
import { Protocol } from '../common/decorators/protocol.decoractor';
import { Public } from '../common/decorators/public.decorator';
import { ParseIntPipe } from '../common/pipes/parse-int/parse-int.pipe';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { UpdateCoffeeDto } from './dto/udpate-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeService: CoffeesService) {}

  @Public()
  @Get()
  async findAll(
    @Protocol('https') @Query() paginationQuery: PaginationQueryDto,
  ) {
    return this.coffeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
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
