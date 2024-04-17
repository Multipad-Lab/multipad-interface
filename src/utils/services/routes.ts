import queryString from "query-string"
import { generatePath, Params } from "react-router-dom"

/**
 * routeTo('admin/view/:id', { id: 'ok'}, { anotherParam: 'value' })
 * @param path 'admin/view/:id'
 * @param params { id: 'ok'}
 * @param query { anotherParam: 'value' }
 * @returns `/admin/view/ok?anotherParam=value`
 */

export const routeTo = (path: string, params?: Params, query?: Record<string, any>) => {
  const url = generatePath(path, params)

  return query ? `${url}?${queryString.stringify(query)}` : url
}
