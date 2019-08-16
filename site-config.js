const path = require('path')

module.exports = {
  siteTitle: 'Théo Réveillard',
  siteTitleShort: 'trvd',
  siteDescription:
    "Ingénieur logiciel spécialisé dans le web. Mon site à pour but de montrer mes réalisations ainsi que d'en savoir plus sur moi. (French version to arrive)",
  siteUrl: 'https://trvd.fr',
  themeColor: 'rgba(163, 114, 57)',
  backgroundColor: 'rgba(163, 114, 57)',
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: 'Morronight',
    linkedin: 'theo-reveillard',
  },
}
