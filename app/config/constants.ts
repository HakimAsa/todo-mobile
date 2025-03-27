import { Platform } from 'react-native'
import Constants from 'expo-constants'

//current os platform
export const onIOS = Platform.OS === 'ios'
export const onWeb = Platform.OS === 'web'
export const onAnd = Platform.OS === 'android'

// export default StatusBarHeight
export const StatusBarHeight = Constants.statusBarHeight

//export endpoints
const ep = {
  AUTH: 'auth',
  TODOS: 'todos',
}

export default ep
