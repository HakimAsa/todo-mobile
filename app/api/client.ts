import { ApisauceInstance, ApiResponse, create } from 'apisauce'
import HM, { HttpMethods } from '../utils/httpMethods'

const apiClient: ApisauceInstance = create({
  baseURL: 'https:example.com', //
  timeout: 2000,
})

apiClient.addAsyncRequestTransform(async (request) => {
  if (!request.headers) request.headers = {}
  //todo later
})

type callServerParams = {
  endpoint: string
  headers?: Record<string, string>
  json?: any // can be undefined, boolean or even string
  method: HttpMethods
}

const callServer = async <T = any>({
  endpoint,
  method,
  json,
  headers,
}: callServerParams): Promise<ApiResponse<T>> => {
  // if no headers, stringify JSON; otherwise keep raw
  const body = !headers ? JSON.stringify(json || {}, null, 2) : json // json: FILE upload

  //clone headers to avoid mutation
  const finalHeaders = headers && { ...headers }

  // sanity check for valid methods
  if (!(method in apiClient)) throw new Error(`Invaild Http method: ${method}`)

  const res: ApiResponse<T> =
    method === HM.DELETE || method === HM.GET
      ? await apiClient[method](endpoint, finalHeaders)
      : await apiClient[method](endpoint, body, finalHeaders)
  return res
}

export default apiClient

export { callServer }
