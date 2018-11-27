module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Coggeshall United Football Club', // Navigation and Site Title
  titleAlt: 'Coggeshall United FC', // Title for JSONLD
  description: 'Coggeshall United FC play in the easton counties division. Currently Coggeshall United play at Coggeshall Town Football Club "West Str ',
  url: 'https://coggeshallunitedfc.co.uk', // Domain of your site. No trailing slash!
  siteUrl: 'https://coggeshallunited.co.uk/', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'CUFC', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Coggeshall United Football Club', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@coggeshallutd', // Twitter Username
};
