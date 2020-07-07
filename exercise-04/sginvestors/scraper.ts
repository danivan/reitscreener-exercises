import Xray from 'x-ray';
import sequelize from '../models/index';

interface Reit {
  reitId: Number,
  stockCode: String,
  link: String
}

export default async () => {
  const reits: any = await sequelize.models.Reit.findAll({
    attributes: ['reitId', 'stockCode'],
    where: {
      exchange: 'SGX'
    },
    raw: true
  });

  const reitWithLinks = reits.map((reit: Reit) => {
    reit.stockCode = reit.stockCode.substring(0, 4);
    if (reit.stockCode === 'A17U') {
      reit.link = 'https://sginvestors.io/sgx/reit/a17u-ascendas-reit/';
    }

    if (reit.stockCode === 'N2IU') {
      reit.link = 'https://sginvestors.io/sgx/reit/n2iu-mapletree-com-tr/';
    }

    if (reit.stockCode === 'M1GU') {
      reit.link = 'https://sginvestors.io/sgx/reit/m1gu-sabana-reit/';
    }

    return reit;
  });

  const x = Xray();

  const xRayResponseNews = await Promise.all(reitWithLinks.map((async (reit: Reit) => {
    const xRayResponse = await x(encodeURI(`${reit.link}news-article`), 'div.stocknewslist article', [{
      title: 'a div.title',
      publishDate: 'a div.publisheddate',
      author: 'a div.author',
      description: 'a div.description',
      descriptionHtml: 'a div.description@html',
      link: 'a@href'
    }]);

    const responseWithContent = await Promise.all(xRayResponse.map(async (response: any) => {
      response.internal = await x(encodeURI(response.link), {
        content: '.article@html',
        image: '.article img@src'
      });
      response.reitId = reit.reitId;
      response.type = 'news';
      return response;
    }));

    return responseWithContent;
  })));

  const xRayResponseBlog = await Promise.all(reitWithLinks.map((async (reit: Reit) => {
    const xRayResponse = await x(encodeURI(`${reit.link}blog-article`), 'div.bloggerssaylist article', [{
      title: 'a div.title',
      publishDate: 'a div.updatedsgtime',
      author: 'a div.authorname',
      description: 'a div.description',
      descriptionHtml: 'a div.description@html',
      link: 'a@href'
    }]);

    const responseWithContent = await Promise.all(xRayResponse.map(async (response: any) => {
      response.internal = await x(encodeURI(response.link), {
        content: '.post, .content@html',
        image: 'main, #main, .main img@src'
      });
      response.reitId = reit.reitId;
      response.type = 'blog';
      return response;
    }));

    return responseWithContent;
  })));

  return [...xRayResponseNews, ...xRayResponseBlog];
}
