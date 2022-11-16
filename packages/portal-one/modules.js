import path from 'path'
import fs from 'fs'
import { createRoutes, relativeTo } from '@nuxt/utils'

// looping to get all nested path
const getAllPages = function (pathDir, arrayOfPath, shortenPath) {
  const files = fs.readdirSync(pathDir)

  arrayOfPath = arrayOfPath || []
  shortenPath = shortenPath || []

  files.forEach(function (file) {
    if (fs.statSync(pathDir + '/' + file).isDirectory()) {
      arrayOfPath = getAllPages(pathDir + '/' + file, arrayOfPath, shortenPath).arrayOfPath
    } else {
      const finalPath = path.join(pathDir, '/', file)
      arrayOfPath.push(finalPath)

      // configuring the path to e.g 'pages/one/index.vue'
      const baseFilePath = finalPath.split('\\pages')
      shortenPath.push('pages' + baseFilePath[1].replaceAll('\\', '/'))
    }
  })
  return { arrayOfPath, shortenPath }
}

export default function NuxtModule () {
  const { routeNameSplitter, trailingSlash } = this.options.router

  // repository specific path
  const directoryPath = path.join(__dirname, 'pages')
  // dynamically retrieving all pages
  const pages = getAllPages(directoryPath).shortenPath

  this.extendRoutes((routes) => {
    routes.push(...createRoutes({
      files: pages,
      srcDir: __dirname,
      pagesDir: 'pages',
      routeNameSplitter,
      trailingSlash
    }))
  })

  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.unshift({
      path: path.resolve(__dirname, 'components'),
      level: 1 // provide a priority
    })
  })

  const layoutPath = file =>
    relativeTo(
      this.options.buildDir,
      path.resolve(__dirname, 'layouts', file)
    )

  this.nuxt.hook('build:templates', ({ templateVars }) => {
    templateVars.layouts.default = layoutPath('index.vue')
  })
}
