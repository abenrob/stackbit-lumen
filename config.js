'use strict';

const siteData = require('./data/site.json')

module.exports = {
...{
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  disqusShortname: '',
  postsPerPage: 4, // required
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false, // required
},
...siteData
};
