import { Controller, Delete, Get, Post, Put, Param, Body, ValidationPipe, Res } from "@nestjs/common";
import { CarService } from "../Services/car.service";
import { ResponseData } from '../../global/globalClass';
import { HttpMessage, HttpStatusCode } from '../../global/globalEnum';
import { ProductDto } from "../Dto/product.dto";
import { ResponseType } from "../../global/globalType";
import { Car } from "../Models/car.model";
@Controller('cars')
export class CarController {
  constructor(private carService: CarService) {
    this.carService = carService;
  }
  @Get()
  async list(@Res() res): Promise<ResponseType<Car>> {
    try {
      const cars = await this.carService.findAll();
      return res.json(
        new ResponseData(cars, HttpStatusCode.OK, HttpMessage.OK),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatusCode.NOT_FOUND, HttpMessage.NOT_FOUND),
      );
    }
  }
  @Get(':id')
  async get(
    @Res() res,
    @Param('id') id: number,
  ): Promise<ResponseType<Car>> {
    try {
      const car = await this.carService.findOne(id);
      return res.json(new ResponseData(car, HttpStatusCode.OK, HttpMessage.OK));
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatusCode.NOT_FOUND, HttpMessage.NOT_FOUND),
      );
    }
  }
  @Post()
  async create(
    @Body(new ValidationPipe()) productDto: ProductDto,
    @Res() res
  ): Promise<ResponseType<Car>> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.create(productDto),
          HttpStatusCode.CREATED,
          HttpMessage.CREATED,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatusCode.NOT_FOUND, HttpMessage.NOT_FOUND),
      );
    }
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body(new ValidationPipe()) productDto: ProductDto,
    @Res() res
  ): Promise<ResponseType<Car>> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.update(id, productDto),
          HttpStatusCode.OK,
          HttpMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatusCode.NOT_FOUND, HttpMessage.NOT_FOUND),
      );
    }
  }
  @Delete(':id')
  async delete(
    @Param('id') id: number,
    @Res() res,
  ): Promise<ResponseType<Car>> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.delete(id),
          HttpStatusCode.OK,
          HttpMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatusCode.NOT_FOUND, HttpMessage.NOT_FOUND),
      );
    }
  }
  @Get('/relations/:id')
  async getRelations(
    @Res() res,
    @Param('id') id: number,
  ): Promise<ResponseType<Car>> {
    try {
      const car = await this.carService.findRelations(id);
      return res.json(new ResponseData(car, HttpStatusCode.OK, HttpMessage.OK));
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatusCode.NOT_FOUND, HttpMessage.NOT_FOUND),
      );
    }
  }

}
