import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native'

import RootStack from './navigation/RootNavigator'
import LanguageProvider from './context/LanguageContext'

export default function Index() {
  return (
    <NavigationIndependentTree>
      <LanguageProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </LanguageProvider>
    </NavigationIndependentTree>
  )
}
