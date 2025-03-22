import { Platform } from 'react-native'

//current os
export const onIOS = Platform.OS === 'ios'
export const onWeb = Platform.OS === 'web'
export const onAnd = Platform.OS === 'android'

//export endpoints
const ep = {
  AUTH: 'auth',
  TODOS: 'todos',
}

export default ep
