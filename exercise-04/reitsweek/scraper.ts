import Xray from 'x-ray';

export default async () => {
  const x = Xray();

  let xrayresponse = await x('https://www.reitsweek.com/category/global-reits-news/australia-reits', 'div.column.half', [{

    title: 'article h2',
    publishDate: 'article div time',
    description: 'article div.excerpt',
    image: 'article a img@src',
    link: 'article h2 a@href',
    internal: x('article h2 a@href',{
      author: 'article header div.post-meta span span.reviewer',
      content: 'div.main-content article@html',
    })
  }])
  .paginate('a.next@href');

  return xrayresponse;
}
