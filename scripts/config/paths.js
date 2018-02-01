const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  src: resolveApp('src'),
  build: resolveApp('build'),
  public: resolveApp('public'),
  sass: resolveApp('src/assets/sass'),
  mainSass: resolveApp('src/assets/sass/styles.scss'),
  css: resolveApp('build/assets/css'),
  imageSrc: resolveApp('src/assets/images'),
  image: resolveApp('build/assets/images'),
  js: {
    index: resolveApp('src/assets/js/index.js'),
    build: resolveApp('build/assets/js')
  },
  html: resolveApp('public/index.html')
};
