import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useContext, useEffect } from 'react'

import Languages from '../screens/common/Languages'
import fr from '../config/fr'
import i18n from '../i18n'
import { LanguageContext } from '../context/LanguageContext'

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
  console.log(language)

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        title: i18n.t(`${route.name}`), // ✅ Will now update dynamically!
      })}
    >
      <Stack.Screen
        name="language"
        component={Languages}
      />
    </Stack.Navigator>
  )
}
