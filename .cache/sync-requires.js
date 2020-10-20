const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-me-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\AboutMe.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\Blog.js"))),
  "component---src-pages-collaboration-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\Collaboration.js"))),
  "component---src-pages-consultation-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\Consultation.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\Contact.js"))),
  "component---src-pages-life-qm-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\LifeQm.js"))),
  "component---src-pages-one-pager-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\OnePager.js"))),
  "component---src-pages-post-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\Post.js"))),
  "component---src-pages-root-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\Root.js"))),
  "component---src-pages-shop-js": hot(preferDefault(require("C:\\Users\\Ola\\Desktop\\kavi-web\\src\\pages\\Shop.js")))
}

