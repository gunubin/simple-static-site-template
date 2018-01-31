const fs = require('fs-extra');
const sass = require('node-sass')
const paths = require('./config/paths')
const logger = require('./lib/logger')

sass.render({
  file: `${paths.sass}/styles.scss`,
  outFile: `${paths.css}`,
}, (err, result) => {
  fs.outputFile(`${paths.css}/styles.css`, result.css, function (err) {
    if (err) {
      logger.error(err)
    }
  });
});
