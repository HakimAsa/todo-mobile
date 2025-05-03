import { ApisauceInstance, create } from 'apisauce'
import HM, { HttpMethods } from '../utils/httpMethods'

const apiClient: ApisauceInstance = create({
  baseURL: 'https:example.com', //
  timeout: 2000,
})

apiClient.addAsyncRequestTransform(async (request) => {
  //todo later
})

type callServerParams = {
  endpoint: string
  headers?: Record<string, string>
  json?: any
  method: HttpMethods
}

const callServer = async ({
  endpoint,
  method,
  json,
  headers,
}: callServerParams) => {}
