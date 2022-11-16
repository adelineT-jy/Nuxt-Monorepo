import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a3ba86d6 = () => interopDefault(import('..\\pages\\one\\index.vue' /* webpackChunkName: "pages/one/index" */))
const _da3ad6f6 = () => interopDefault(import('..\\pages\\second\\index.vue' /* webpackChunkName: "pages/second/index" */))
const _19af39ab = () => interopDefault(import('..\\pages\\one\\_id\\info.vue' /* webpackChunkName: "pages/one/_id/info" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/one",
    component: _a3ba86d6,
    name: "one"
  }, {
    path: "/second",
    component: _da3ad6f6,
    name: "second"
  }, {
    path: "/one/:id/info",
    component: _19af39ab,
    name: "one-id-info"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
