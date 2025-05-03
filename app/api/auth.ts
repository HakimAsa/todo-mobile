import ep from '@/config/endpoints'
import { callServer } from './client'
import HM from '../utils/httpMethods'

const { REGISTER } = ep

type User = {
  email: string
}

const register = (data: Record<string, string>) =>
  callServer<User>({ endpoint: REGISTER, method: HM.POST, json: data })

export default {
  register,
}
