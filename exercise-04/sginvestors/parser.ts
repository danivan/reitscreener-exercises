import sginvestorsScraper from './scraper';

interface Insight {
  title: String,
  publishDate: String,
  author: String,
  description: String,
  descriptionHtml: String,
  link: String,
  internal: {
    content: String,
    image: String
  },
  image: String,
  content: String,
  reitId: Number,
  type: String
}
export default async () => {
  const data: any = await sginvestorsScraper();

  const insights = data.flat();

  return insights.reduce((insights: Insight[], insight: Insight) => {
    if (insight.internal.content === null) {
      insight.internal.content = insight.descriptionHtml;
    }
    delete insight.descriptionHtml;

    if (insight.internal.image === undefined) insight.internal.image = '';
    insight.image = insight.internal.image;
    insight.content = insight.internal.content;
    delete insight.internal;

    return [...insights, insight];
  }, []);
}
