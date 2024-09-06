import { config } from '~/src/config/index.js'
import { get } from '~/src/server/common/helpers/fetch.js'

const baseUrl = `${config.get('backend.url')}/professions`

async function getProfessions() {
  return get(baseUrl, {})
}

export { getProfessions }
