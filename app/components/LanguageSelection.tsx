import { Pressable, StyleSheet, View } from 'react-native'
import { useState } from 'react'

import Colors from '../config/colors'
import TmText from './common/text/TmText'
import i18n from '../i18n'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface InitialValue {
  label: string
  value: string
}
interface LsProps {
  initialValue: InitialValue
  data: InitialValue[]
  logo: boolean
}

export default function LanguageSelection({
  data,
  initialValue,
  logo,
}: LsProps) {
  const [open, setOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(initialValue)
  const changeLanguage = (item: InitialValue) => {
    setSelectedLanguage(item)
    setOpen(false)
    i18n.locale = item.value
  }
  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <TmText
          small
          style={styles.text}
        >
          {i18n.t('chooseLanguage')}
        </TmText>
        <Pressable
          onPress={() => setOpen(!open)}
          style={{ width: '15%', alignSelf: 'center' }}
        >
          <View style={styles.pressableView}>
            <TmText style={{ color: Colors.black, paddingHorizontal: 30 }}>
              {i18n.t(selectedLanguage.label) ?? i18n.t('selectItem')}
            </TmText>
            <MaterialCommunityIcons
              name={open ? 'chevron-up' : 'chevron-down'}
              size={20}
            />
          </View>
        </Pressable>
        {open && (
          <View style={styles.languageView}>
            {data.map((item) => (
              <Pressable
                key={item.value}
                onPress={() => changeLanguage(item)}
                // style={styles.languageView}
              >
                <TmText
                  style={{
                    color: Colors.black,
                    paddingHorizontal: 30,
                    marginBottom: 5,
                  }}
                >
                  {i18n.t(item.label)}
                </TmText>
              </Pressable>
            ))}
          </View>
        )}
      </View>
      {logo && <TmText style={{ marginTop: 10 }}>Logo</TmText>}
    </View>
  )
}

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageView: {
    marginTop: 5,
    width: '15%',
    backgroundColor: Colors.white,
  },
  pressableView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    // paddingHorizontal: 30,
    backgroundColor: Colors.white,
  },

  text: {
    color: Colors.white,
    marginBottom: 10,
  },
})
