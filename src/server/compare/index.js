import { viewComparisonController } from '~/src/server/compare/controller.js'

export const compare = {
  plugin: {
    name: 'compare',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/jafs/compare/{id}',
          ...viewComparisonController
        }
      ])
    }
  }
}
