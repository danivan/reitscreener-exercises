import scrapeReitsWeek from './scraper';
import { BeforeFindAfterExpandIncludeAll } from 'sequelize-typescript';

interface Article {
  title: String,
  publishDate: String,
  description: String,
  internal: {
    content: String,
    author: String
  },
  author: String,
  content: String,
  image: String,
  type: String
}

export default async () => {
  const data: Array<Article> = await scrapeReitsWeek();

  return data.map((article) => {
    article.author = article.internal.author;
    article.content = article.internal.content;
    article.type = 'news';
    delete article.internal;
    return article;
  });
};
