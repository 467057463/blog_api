import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ArticlesService } from './articles.service';
import { ArticleDto } from './articles.dto';
import { Article } from './interfaces/article.interface';



@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService
  ){}

  @Get()
  async findAll(): Promise<Article[]>{
    return this.articlesService.findAll()
  }

  @Post()
  async create(
    @Body() articleDto: ArticleDto
  ): Promise<Article>{
    return this.articlesService.create(articleDto);
    // return 'create success';
  }

  @Get(':id')
  findOne(
    @Param('id') id
  ):string{
    return id
  }
}
