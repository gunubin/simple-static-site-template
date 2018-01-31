const webpack = require('webpack')
const config = require('./config/webpack.production')
const configSass = require('./config/webpack.sass.production')
const statsConfig = require('./config/stats')
const logger = require('./lib/logger')
const paths = require('./config/paths')
const fs = require('fs-extra')

const prepareCompile = () =>
  new Promise((resolve, reject) => {
    logger.info(`Copying static assets from ${paths.src} to ${paths.public}.`)
    fs.emptyDirSync(paths.build) // clean up
    fs.copySync(paths.public, paths.build, {
      dereference: true,
      // filter: file => file !== paths.html
    })
    logger.info(`copy done.`)
    return resolve()
  })

const runWebpackCompiler = webpackConfig =>
  new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err)
      }
      logger.info(stats.toString(statsConfig))
      return resolve()
    })
  })


const compile = () => Promise.resolve()
  .then(() => logger.info('Stating compiler...'))
  .then(() => prepareCompile())
  .then(() => runWebpackCompiler([config]))
  .then(() => {
    logger.success(`Compiler finished successfully! See ${paths.public}.`)
  })
  .catch(err => logger.error('Compiler encountered errors.', err))

compile()


