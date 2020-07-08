import Xray from 'x-ray';

export default async () => {
  const x = Xray();

  let xrayresponse = await x('https://www.probutterfly.com/blog', '.panel', [{

    title: 'div.panel__body h2.blog__title',
    publishDate: 'div.panel__body div.blog__info span.blog__date',
    author: 'div.panel__body div.blog__conent p:first-child',
    description: 'div.panel__body div.blog__conent',
    link: 'div.panel__body h2.blog__title a@href',
    internal: x('div.panel__body h2.blog__title a@href', {
      content: 'div.panel:nth-child(1) > div:nth-child(1)@html',
      image: 'div.panel.blog div.panel__body img@src',
    })
  }])
  .paginate('div.pag div.pag__cell--next a@href');

  return xrayresponse;
}
