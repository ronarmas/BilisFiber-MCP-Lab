import { Injectable } from '@nestjs/common';

import { articles } from './knowledge-base.data';


@Injectable()
export class KnowledgeBaseService {


  search(keyword: string) {

    const searchKeyword =
      keyword.toLowerCase();


    return articles.filter(article =>

      article.keywords.some(key =>
        key.includes(searchKeyword)
      )

    );

  }


  getArticle(articleId: string) {

    return articles.find(
      article =>
        article.articleId === articleId,
    );

  }


  getAllArticles() {

    return articles;

  }

}