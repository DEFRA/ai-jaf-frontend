import { viewJafController } from '~/src/server/view/controller.js'

export const view = {
  plugin: {
    name: 'view',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/jafs/view/{id}',
          ...viewJafController
        }
      ])
    }
  }
}
