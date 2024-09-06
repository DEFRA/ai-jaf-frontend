import { config } from '~/src/config/index.js'
import { get } from '~/src/server/common/helpers/fetch.js'

const baseUrl = `${config.get('backend.url')}/comparisons`

async function getComparison(id) {
  const res = await get(`${baseUrl}/${id}`, {})

  return res
}

export { getComparison }
