const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/young/Desktop/Gulp/Development/gatsby-absurd/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/young/Desktop/Gulp/Development/gatsby-absurd/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/young/Desktop/Gulp/Development/gatsby-absurd/src/pages/page-2.js")))
}

