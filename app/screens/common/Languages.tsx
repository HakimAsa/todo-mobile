import { getLocales } from 'expo-localization'

import LanguageSelection from '@/app/components/LanguageSelection'
import fr from '@/app/config/fr'

const data = [
  {
    label: 'english',
    value: 'en',
  },
  {
    label: 'french',
    value: 'fr',
  },
]

const defineInitialValue = function () {
  const code = getLocales()[0]?.languageCode
  return code === 'fr'
    ? { label: 'french', value: code }
    : { label: 'english', value: 'en' }
}
export default function Languages() {
  const initialValue = defineInitialValue()
  return (
    <LanguageSelection
      data={data}
      initialValue={initialValue}
      logo
    />
  )
}
