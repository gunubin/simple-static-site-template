const bs = require('browser-sync').create()
const paths = require('./config/paths')
const {PORT} = require('./config/project')

bs.init({
  server: {
    baseDir: `${paths.build}`
  },
  port: PORT || 3000,
  open: false
})

bs.watch(`${paths.build}/**/*.*`).on('change', file => {
  bs.reload(file)
})
