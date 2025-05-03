import ep from '@/config/endpoints'
import { callServer } from './client'
import HM from '../utils/httpMethods'
import helpers from '../utils/helpers'

const { AUTH, REGISTER } = ep
const { doSetForwardslash: dsf } = helpers

type User = {
  email: string
}

const register = (data: Record<string, string>) =>
  callServer<User>({
    endpoint: dsf(AUTH, REGISTER),
    method: HM.POST,
    json: data,
  })

export default {
  register,
}
