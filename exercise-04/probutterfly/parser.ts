import R from 'ramda';
import scrapeProbutterfly from './scraper';

interface Article {
  title: String,
  publishDate: String,
  description: String,
  author: String,
  internal: {
    content: String,
    image: String
  },
  content: String,
  image: String,
  type: String
}

export default async () => {
  const data: Array<Article> = await scrapeProbutterfly();

  const notNull = (f: Article) => f.internal.content !== null;

  const filtered = R.filter(notNull, data);

  return filtered.reduce((articles: Array<Article>, article) => {
    if (article.author.substring(0, 3) !== 'by:') {
      return articles;
    }
    article.type = 'blog';
    article.author = article.author.substring(4);
    article.image = article.internal.image;
    article.content = article.internal.content;
    delete article.internal;
    return [...articles, article];
  }, []);
};
