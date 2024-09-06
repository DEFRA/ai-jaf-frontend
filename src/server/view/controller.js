import { getJaf } from '~/src/server/view/helpers/jafs.js'
import { ViewJaf } from '~/src/server/view/models/view-jaf.js'

export const viewJafController = {
  async handler(request, h) {
    const { id } = request.params

    const jaf = await getJaf(id)

    const model = new ViewJaf(jaf)

    return h.view('view/index', { pageTitle: 'JAF Repository', model })
  }
}
