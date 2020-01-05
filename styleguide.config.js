module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  template: {
    favicon: 'https://api.adorable.io/avatars/285/abott@adorable.pngds',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  },
  theme: {
    color: {
      link: '#333',
      linkHover: '#29bff5 '
    },
    fontFamily: {
      base: '"Roboto", sans-serif',
    }
  },
  title: "Artia UI",
  version: "0.0.1",
};