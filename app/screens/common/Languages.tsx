import { getLocales } from 'expo-localization'

import LanguageSelection from '@/app/components/LanguageSelection'
import fr from '@/app/config/fr'
import { useEffect, useState } from 'react'
import Storage from '@/app/utils/Storage'

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
  const [loading, setLoading] = useState(true)
  const initialValue = defineInitialValue()

  const goNext = async () => {
    const isLanguageSelected = await Storage.getData('language')
    if (!isLanguageSelected) {
      await Storage.storeData('language', initialValue)
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: fr.presentation }], // Navigate to presentation without going back
    // })
    // navigation.navigate()
  }

  // useEffect(() => {
  // }, [])
  return (
    <LanguageSelection
      data={data}
      goNext={goNext}
      initialValue={initialValue}
      logo
    />
  )
}
