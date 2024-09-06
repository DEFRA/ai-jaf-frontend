import { config } from '~/src/config/index.js'
import { get } from '~/src/server/common/helpers/fetch.js'

const baseUrl = `${config.get('backend.url')}/jafs`

async function listJafs(profession) {
  const query = profession ? `?profession=${profession}` : ''

  const res = await get(`${baseUrl}${query}`, {})

  return res ?? []
}

export { listJafs }
