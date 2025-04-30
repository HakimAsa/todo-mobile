import { RouteProp } from '@react-navigation/native'

import routes from './routes'

export type RootStackParamList = {
  [routes.HOME]: undefined
  [routes.PROFILE]: { userId: string }
  [routes.SETTINGS]: { toggleDarkMode: boolean }
}

// Example of a route prop type for the Profile screen
type TmRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>

export default TmRouteProps
