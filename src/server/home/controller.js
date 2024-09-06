import { config } from '~/src/config/index.js'

/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 * @satisfies {Partial<ServerRoute>}
 */
export const homeController = {
  handler(request, h) {
    return h.view('home/index', {
      pageTitle: 'Home',
      heading: config.get('serviceName')
    })
  }
}

/**
 * @import { ServerRoute } from '@hapi/hapi'
 */
