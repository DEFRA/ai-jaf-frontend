import { getProfessions } from '~/src/server/jafs/helpers/professions.js'
import { JafOverview } from '~/src/server/jafs/models/jaf-overview.js'
import { listJafs } from '~/src/server/jafs/helpers/jafs.js'

export const jafsController = {
  async handler(request, h) {
    const { profession } = request.query
    const professions = await getProfessions()

    const jafs = await listJafs(profession)

    const model = new JafOverview(jafs, professions, profession)

    return h.view('jafs/index', { pageTitle: 'JAF Repository', model })
  }
}
