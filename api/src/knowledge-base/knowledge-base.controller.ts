import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';

import { KnowledgeBaseService } from './knowledge-base.service';


@Controller('knowledge-base')
export class KnowledgeBaseController {


  constructor(
    private readonly knowledgeBaseService: KnowledgeBaseService,
  ) {}


  @Get('search')
  search(
    @Query('keyword') keyword: string,
  ) {

    return this.knowledgeBaseService.search(
      keyword,
    );

  }


  @Get(':articleId')
  getArticle(
    @Param('articleId') articleId: string,
  ) {

    return this.knowledgeBaseService.getArticle(
      articleId,
    );

  }


  @Get()
  getAll() {

    return this.knowledgeBaseService.getAllArticles();

  }

}