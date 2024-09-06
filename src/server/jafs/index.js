import { jafsController } from '~/src/server/jafs/controller.js'

export const jafs = {
  plugin: {
    name: 'jafs',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/jafs',
          ...jafsController
        }
      ])
    }
  }
}
