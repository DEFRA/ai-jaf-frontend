import { getJaf } from '~/src/server/compare/helpers/jafs.js'
import { getComparison } from '~/src/server/compare/helpers/comparisons.js'
import { ViewComparison } from '~/src/server/compare/models/view-comparison.js'

export const viewComparisonController = {
  async handler(request, h) {
    const { id } = request.params

    const comparison = await getComparison(id)
    const jaf = await getJaf(comparison.base_jaf_id)

    const model = new ViewComparison(jaf, comparison)

    return h.view('compare/index', { pageTitle: 'JAF Repository', model })
  }
}
