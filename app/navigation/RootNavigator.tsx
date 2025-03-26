import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useContext, useEffect } from 'react'

import Languages from '../screens/common/Languages'
import i18n from '../i18n'
import { LanguageContext } from '../context/LanguageContext'
import routes from './routes'
import Welcome from '../screens/common/auth/Welcome'
import Register from '../screens/common/auth/Register'

const Stack = createNativeStackNavigator()
export default function RootStack() {
  const languageContext = useContext(LanguageContext)
  // Handle case where context is undefined (shouldn't happen if wrapped properly)
  if (!languageContext) {
    return null // Or show a loading state
  }

  const { language } = languageContext

  // Ensure re-render when the language changes
  useEffect(() => {
    // This effect runs when the language changes to refresh titles
  }, [language])

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        title: i18n.t(`${route.name}`), // ✅ Will now update dynamically!
      })}
    >
      <Stack.Screen
        name={routes.LANGUAGE}
        component={Languages}
      />
      <Stack.Screen
        name={routes.WELCOME}
        component={Welcome}
      />

      <Stack.Screen
        name={routes.REGISTER}
        component={Register}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}
