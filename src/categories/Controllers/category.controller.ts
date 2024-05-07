import { Body, Controller, Delete, Get, Param, Post, Put, Res, ValidationPipe } from "@nestjs/common";
import { Category } from '../Models/category.model';
import { ResponseType } from '../../global/globalType';
import { HttpMessage, HttpStatusCode } from '../../global/globalEnum';
import { ResponseData } from '../../global/globalClass';
import { CategoryService } from '../Services/category.service';
import { CategoryDto } from "../Dto/category.dto";

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get()
  async list(@Res() res): Promise<ResponseType<Category>> {
    try {
      const categories = await this.categoryService.findAll();
      return res.json(
        new ResponseData(categories, HttpStatusCode.OK, HttpMessage.OK),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatusCode.NOT_FOUND, HttpMessage.NOT_FOUND),
      );
    }
  }
  //
  @Get(':id')
  async get(
    @Res() res,
    @Param('id') id: number,
  ): Promise<ResponseType<Category>> {
    try {
      const category = await this.categoryService.findOne(id);
      return res.json(
        new ResponseData(category, HttpStatusCode.OK, HttpMessage.OK),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatusCode.NOT_FOUND, HttpMessage.NOT_FOUND),
      );
    }
  }
  @Post()
  async create(
    @Body(new ValidationPipe()) categoryDto: CategoryDto,
    @Res() res
  ): Promise<ResponseType<Category>> {
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.create(categoryDto),
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
    @Body(new ValidationPipe()) categoryDto: CategoryDto,
    @Param('id') id: number,
    @Res() res
  ): Promise<ResponseType<Category>> {
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.update(id, categoryDto),
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
  async delete(@Param('id') id: number, @Res() res): Promise<ResponseType<boolean>> {
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.delete(id),
          HttpStatusCode.OK,
          HttpMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(
          false,
          HttpStatusCode.NOT_FOUND,
          HttpMessage.NOT_FOUND,
        ),
      );
    }
  }
}